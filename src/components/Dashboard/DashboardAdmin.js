/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { Table, Modal, message, Tag } from 'antd';
import API from '../../lib/api';
import { urlToBase64 } from '../../utils/img';
import moment from 'moment';
import { buildLabelFoto } from '../../lib/helpers/buildLabelFoto';
import TableActions from './TableActions';
import PhotosDrawer from './PhotosDrawer';
import ToolbarTable from './ToolbarTable';
import FormOfertar from './FormOfertar/FormOfertar';
import {
  subscribeToNuevaPersona,
  subscribeToNuevoPedido,
  subscribeToRevision,
} from '../../socket/socket';

const DashboardAdmin = ({ history }) => {
  const [personas, setPersonas] = useState();
  const [personasTable, setPersonasTable] = useState();
  // const [newInstitucional, setNewInstitucional] = useState();
  // const [newSocial, setNewSocial] = useState();
  const [showAudioModal, setShowAudioModal] = useState(false);
  const [persona, setPersona] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [predefinedState, setPredefinedState] = useState();
  const [loading, setLoading] = useState(false);
  // const [modalPDF, setModalPDF] = useState(false);
  const [loadingPDF, setLoadingPDF] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [personaOfertar, setPersonaOfertar] = useState({});
  const [showPersonaOfertarModal, setShowPersonaOfertarModal] = useState(false);
  const [loadingRevision, setLoadingRevision] = useState(false);

  const handleRevisionUpdate = (personaToUpdate) =>
    setPersonasTable((personasTable) => {
      const copyTable = personasTable.map((persona) => ({ ...persona }));
      const persona = copyTable.find(({ _id }) => _id === personaToUpdate._id);
      persona.enRevision = {
        ...personaToUpdate,
        status: personaToUpdate.revision,
      };
      return copyTable;
    });

  const handleNuevoPedidoUpadate = ({ persona: personaToUpdate }) =>
    setPersonasTable((personasTable) => {
      const copyTable = personasTable.map((persona) => ({ ...persona }));
      const personaIndex = copyTable.findIndex(
        ({ _id }) => _id === personaToUpdate._id,
      );
      copyTable[personaIndex] = personaToUpdate;
      return copyTable;
    });

  const handleNuevaPersona = (personaToAdd) =>
    console.log(personaToAdd) ||
    setPersonasTable((personasTable) => {
      const copyTable = personasTable.map((persona) => ({ ...persona }));
      return [{ ...personaToAdd, esNuevo: true }, ...copyTable];
    });

  useEffect(() => {
    subscribeToRevision(handleRevisionUpdate);
    subscribeToNuevoPedido(handleNuevoPedidoUpadate);
    subscribeToNuevaPersona(handleNuevaPersona);
    const getPersonas = async () => {
      try {
        setLoading(true);
        const { respuesta } = await API.get('/personas', {
          headers: {
            Authorization: sessionStorage.getItem('token'),
          },
        });
        setPersonas(respuesta);
        setPersonasTable(respuesta);
      } catch (error) {
        console.log('error: ', error);
      } finally {
        setLoading(false);
      }
    };
    getPersonas();
  }, []);

  const handleVerDetalle = (dni) => () =>
    history.push(`/dashboard/edit/${dni}`);

  const handleVerFotos = (id) => async () => {
    setPersona(null);
    try {
      setLoading(true);
      const { respuesta } = await API.get(`/personas/${id}`, {
        headers: { Authorization: sessionStorage.getItem('token') },
      });
      const fotos = [];
      for (const fotoName in respuesta[0].fotos) {
        if (fotoName !== 'firma') {
          const foto = {
            label: buildLabelFoto(fotoName),
            src: respuesta[0].fotos[fotoName],
          };
          fotos.push(foto);
        }
      }
      setFotos(fotos);
      setPersona(respuesta[0]);
    } catch (error) {
      message.warning('Error');
    } finally {
      setLoading(false);
      setIsDrawerVisible(true);
    }
  };

  const handleEnableEdit = (dni) => async () => {
    try {
      setLoading(true);
      const { mensaje } = await API.post(
        '/personas/enableEdit',
        { dni },
        {
          headers: { Authorization: sessionStorage.getItem('token') },
        },
      );
      Modal.success({
        title: 'URL EDICION CLIENTE',
        content: <h2>{mensaje}</h2>,
        width: 750,
      });
    } catch (error) {
      message.warning('Error');
    } finally {
      setLoading(false);
    }
  };

  const handleDescargarPdf = async (id) => {
    try {
      setLoading(true);
      const { respuesta } = await API.get(`/personas/${id}`, {
        headers: { Authorization: sessionStorage.getItem('token') },
      });
      const persona = respuesta[0];
      const firma = await urlToBase64(persona.fotos.firma);
      persona.fotos.firma = firma;
      setPredefinedState(persona);
    } catch (error) {
      message.warning('Error');
      setLoading(false);
    }
  };

  const handleGestionar = (record) => () => {
    const copiaPersona = {
      ...record,
      pedidos: record.pedidos.map((pedido) => ({
        ...pedido,
        oferta: { ...pedido.oferta },
      })),
      enRevision: { ...record.enRevision },
    };
    setPersonaOfertar(copiaPersona);
    setShowPersonaOfertarModal(true);
  };

  const handleShowAudio = (id) => () => {
    setPersona(personas.find((persona) => persona._id === id));
    toggleAudioModal();
  };

  useEffect(() => {
    if (predefinedState) {
      setLoading(false);
      // setModalPDF(true);
    }
  }, [predefinedState]);

  useEffect(() => {
    if (!showAudioModal) {
      setPersona(null);
    }
  }, [showAudioModal]);

  const handleDownloadPDF = (idPersona) => async () => {
    try {
      setLoadingPDF(true);
      const { respuesta } = await API.get(`/personas/getPDF/${idPersona}`, {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      });
      const { pdfURL } = respuesta[0];
      if (!pdfURL.length) {
        return message.warning('No se encontraron PDFs para esta persona');
      }
      for (const pdf of pdfURL) {
        window.open(pdf, '_blank');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPDF(false);
    }
  };

  const handleRevision = (_id, revision) => async () => {
    try {
      setLoadingRevision(true);
      await API.post(
        '/personas/revision/',
        {
          _id,
          revision,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem('token'),
          },
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingRevision(false);
    }
  };

  const handleCloseNuevo = (personaToUpdate) =>
    setPersonasTable((personaTable) => {
      const persona = personaTable.find(
        ({ _id }) => _id === personaToUpdate._id,
      );
      persona.esNuevo = false;
      return [...personasTable];
    });

  const columns = [
    // {
    //   title: '',
    //   dataIndex: 'esNuevo',
    //   key: 'esNuevo',
    //   render: (data) => data && <Tag color="green">Nuevo</Tag>,
    // },
    {
      title: '',
      dataIndex: 'esNuevo',
      render: (data, persona) =>
        data && (
          <Tag
            closable
            onClose={(e) => {
              e.preventDefault();
              handleCloseNuevo(persona);
            }}
            color="success"
          >
            Nuevo
          </Tag>
        ),
    },
    {
      title: 'Apellido',
      dataIndex: 'apellido',
      key: 'apellido',
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'DNI',
      dataIndex: 'dni',
      key: 'dni',
    },
    {
      title: 'Sexo',
      dataIndex: 'sexo',
      key: 'sexo',
    },
    {
      title: 'Banco / Institución',
      dataIndex: 'pedidos',
      render: (pedidos) => pedidos && pedidos[0]?.banco,
    },
    {
      title: 'Vendedor ',
      dataIndex: 'pedidos',
      render: (pedidos) => pedidos && pedidos[0]?.vendedor,
    },
    {
      title: 'Fecha último pedido ',
      dataIndex: 'fechaUltimoPedido',
      key: 'fechaUltimoPedido',
      render: (data) => moment(data).format('DD/MM/YYYY'),
    },
    {
      title: 'Estado último pedido ',
      dataIndex: 'pedidos',
      render: (pedidos) => {
        const label =
          pedidos &&
          `${pedidos[0]?.estado}${
            pedidos[0].revisadoPor ? ` - (${pedidos[0].revisadoPor})` : ''
          }`;
        return label;
      },
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (text, record) => (
        <TableActions
          record={record}
          handleVerDetalle={handleVerDetalle}
          handleVerFotos={handleVerFotos}
          handleGestionar={handleGestionar}
          handleEnableEdit={handleEnableEdit}
          handleDescargarPdf={handleDescargarPdf}
          handleShowAudio={handleShowAudio}
          handleDownloadPDF={handleDownloadPDF}
          loadingPDF={loadingPDF}
          loadingRevision={loadingRevision}
          handleRevision={handleRevision}
        />
      ),
    },
  ];

  // const closeModal = () => setModalPDF(false);

  const closeDrawer = () => setIsDrawerVisible(false);

  const handleSearch = ({ target: { value } }) => {
    const newPersonasTable = personas.filter(
      (persona) =>
        persona.nombre.toLowerCase().includes(value.toLowerCase()) ||
        persona.apellido.toLowerCase().includes(value.toLowerCase()) ||
        persona.pedidos[0]?.vendedor
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        persona.pedidos[0]?.banco.toLowerCase().includes(value.toLowerCase()) ||
        persona.pedidos[0]?.estado
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        persona.dni.includes(value),
    );
    setPersonasTable(newPersonasTable);
  };

  const handleFilterDate = (values) => {
    if (!values) return setPersonasTable(personas);
    const newPersonasTable = personas.filter((persona) =>
      moment(persona.createdAt).isBetween(values[0], values[1]),
    );
    setPersonasTable(newPersonasTable);
  };

  const toggleAudioModal = () => setShowAudioModal((state) => !state);

  const handleCloseModal = () => {
    setShowPersonaOfertarModal(false);
    setPersonaOfertar({});
  };

  const handleUpdateOferta = () => {
    handleCloseModal();
  };

  return (
    <>
      <div className="mt-4 mx-auto">
        <ToolbarTable
          handleSearch={handleSearch}
          handleFilterDate={handleFilterDate}
          placeholder="Buscar por nombre, apellido, DNI, vendedor, banco y estado del ultimo pedido"
          disabled={loading}
        />
        <Table
          columns={columns}
          dataSource={personasTable}
          loading={loading}
          pagination={{ pageSize: 50 }}
          rowKey={(record) => record._id}
        />
        {/* <GeneratePDFModal
        modalPDF={modalPDF}
        closeModal={closeModal}
        predefinedState={predefinedState}
      />
      <AudioModal
        persona={persona}
        showAudioModal={showAudioModal}
        toggleModal={toggleAudioModal}
      /> */}
        {persona && (
          <PhotosDrawer
            persona={persona}
            isDrawerVisible={isDrawerVisible}
            closeDrawer={closeDrawer}
            fotos={fotos}
          />
        )}
      </div>
      <Modal
        visible={showPersonaOfertarModal}
        title={`${personaOfertar?.apellido?.toUpperCase()}, ${personaOfertar?.nombre?.toUpperCase()} - DNI: ${
          personaOfertar?.dni
        }`}
        footer={null}
        width={1100}
        onCancel={handleCloseModal}
      >
        <FormOfertar
          showPersonaOfertarModal={showPersonaOfertarModal}
          persona={personaOfertar}
          onUpdateOferta={handleUpdateOferta}
        />
      </Modal>
    </>
  );
};

export default DashboardAdmin;
