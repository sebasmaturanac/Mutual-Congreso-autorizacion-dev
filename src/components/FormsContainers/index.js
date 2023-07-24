import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../Form';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import API from '../../lib/api';
import { message } from 'antd';
import { useParams } from 'react-router-dom';
import { formatDataUpload } from '../../lib/helpers/apiCustoms';
import convertImage from '../../lib/helpers/base64tofile';
import routes from '../../routes';
import queryString from 'query-string';

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const FormsContainer = () => {
  let { dni } = useParams();
  const history = useHistory();
  const locationSearch = queryString.parse(history.location.search);
  const [loading, setLoading] = useState(false);
  const [firma, setFirma] = useState();
  const [loadedValues, setLoadedValues] = useState();

  const onFirma = (value) => {
    setFirma(value);
  };

  useEffect(() => {
    if (dni) {
      const fetchValues = async () => {
        try {
          setLoading(true);
          const result = await API.get(`/personas/getForm/${dni}`);
          const data = result.respuesta[0];
          sessionStorage.setItem('token', data.token);
          setLoadedValues(data);
          setLoading(false);
        } catch (error) {
          message.error(error.response.data.mensaje);
        }
      };
      fetchValues();
    }
  }, [dni]);

  const APIMethod = (payload) =>
    dni
      ? API.put(
        '/personas',
        { ...payload, _id: loadedValues._id },
        {
          headers: {
            Authorization: loadedValues.token,
          },
        },
      )
      : API.post('/personas', {
        ...payload,
        registeredFrom:
            locationSearch &&
            locationSearch.source &&
            locationSearch.source.toLowerCase() === 'social'
              ? 'social'
              : 'institucional',
      });

  const updateData = async (values) => {
    if (!firma) {
      message.warning('Por favor firme el formulario');
      return;
    }
    //Se crea la persona y guarda el token para usarlo en la firma, subida de archivos.
    try {
      const payload = formatDataUpload(values);
      setLoading(true);
      const { mensaje, respuesta } = await APIMethod(payload);
      const token = dni ? loadedValues.token : respuesta[0].token;
      const messageRes = mensaje;
      let formData = new FormData();
      let image = convertImage(firma, `firma-${values.dni}.png`);
      formData.append('file', image);
      formData.append('fotoTarget', 'firma');
      //envia la firma con el token
      await API.post('/uploads/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      });
      sessionStorage.setItem('token', token);
      message.success(messageRes);
      if (!dni) history.push(routes.uploadFile);
    } catch (error) {
      console.log(error);

      message.error(
        'Se detecto un error. Por favor, corrobore todos los campos completados',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Form
          isEditUser={Boolean(dni)}
          onUpdate={updateData}
          onSaveSignature={onFirma}
          defaultValues={loadedValues}
        />
      )}
    </div>
  );
};

export default FormsContainer;
