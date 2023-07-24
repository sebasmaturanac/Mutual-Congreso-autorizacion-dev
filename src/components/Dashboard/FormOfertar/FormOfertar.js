/* eslint-disable react/display-name */

import {
  Button,
  Form,
  Input,
  List,
  message,
  Popover,
  Select,
  Space,
  Table,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import API from '../../../lib/api';
import { DollarCircleOutlined, CommentOutlined } from '@ant-design/icons';

const { Option } = Select;

const ESTADOS = ['APROBADO', 'RECHAZADO', 'PENDIENTE'];

const renderOfertas = ({ total, montoCuota, cantidadCuotas }) =>
  total ? (
    <p>
      Total: ${total} <br />
      Monto Cuota: ${montoCuota} <br />
      Cantidad Cuotas: ${cantidadCuotas} <br />
    </p>
  ) : (
    <p>No hay oferta</p>
  );

const renderComentario = (comentario) =>
  comentario ? <p>{comentario}</p> : <p>No hay comentario</p>;

const columns = [
  {
    title: 'Fecha pedido',
    dataIndex: 'numeroTramite',
    key: 'numeroTramite',
    render: (data) => moment.unix(data/1000).format('DD/MM/YYYY HH:mm'),
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
  },
  {
    title: 'Revisado por',
    dataIndex: 'revisadoPor',
    key: 'revisadoPor',
  },
  {
    title: 'Num Tramite',
    dataIndex: 'numeroTramite',
    key: 'numeroTramite',
  },
  {
    title: 'Vendedor',
    dataIndex: 'vendedor',
    key: 'vendedor',
  },
  {
    title: 'Banco / Institución',
    dataIndex: 'banco',
    key: 'banco',
  },
  {
    title: 'Tipo de consulta',
    dataIndex: 'tipoConsulta',
    key: 'tipoConsulta',
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: (text, record) => (
      <Space size="middle">
        <Popover
          content={renderOfertas(record.oferta)}
          title="Oferta"
          trigger="click"
        >
          <Button type="text" icon={<DollarCircleOutlined />} />
        </Popover>

        <Popover
          content={renderComentario(record.comentario)}
          title="Comentario"
          trigger="click"
        >
          <Button type="text" icon={<CommentOutlined />} />
        </Popover>
      </Space>
    ),
  },
];

export default function FormOfertar({
  persona,
  onUpdateOferta,
  showPersonaOfertarModal,
  isVendedor = false,
}) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [enableFields, setEnableFields] = useState(false);

  const handleEstadoChange = (value) => setEnableFields(value === 'APROBADO');

  useEffect(() => {
    if (!showPersonaOfertarModal) {
      form.resetFields();
      setEnableFields(false);
    }
  }, [form, showPersonaOfertarModal]);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const payload = {
        _id: persona._id,
        numeroTramite: persona?.pedidos[0]?.numeroTramite,
        estado: values.estado,
        comentario: values.comentario,
        oferta: {
          total: values.total,
          cantidadCuotas: values.cantidadCuotas,
          montoCuota: values.montoCuota,
        },
      };
      await API.post('/personas/asignarPedido', payload, {
        headers: { Authorization: sessionStorage.getItem('token') },
      });
      form.resetFields();
      onUpdateOferta();
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const username = sessionStorage.getItem('username');

  const getDataTable = (pedidos) => {
    if (pedidos && pedidos[0].estado === 'SIN REVISION') {
      const pedidosCopia = pedidos.map((pedido) => ({ ...pedido }));
      pedidosCopia.shift();
      return pedidosCopia;
    }
    return pedidos;
  };

  return (
    <div className="my-2">
      {!isVendedor && (
        <>
          {'pedidos' in persona &&
            persona?.pedidos[0]?.estado === 'SIN REVISION' && (
              <div className="flex flex-row">
                <div className="flex-1">
                  <h4>Último pedido</h4>
                  <List.Item>
                    {moment(persona?.pedidos[0]?.createdAt).format(
                      'DD/MM/YYYY HH:mm',
                    )}{' '}
                    Estado: {persona?.pedidos[0]?.estado}
                    <br />
                    Num Tramite: {
                      persona?.pedidos[0]?.numeroTramite
                    } <br /> Vendedor: {persona?.pedidos[0]?.vendedor} <br />{' '}
                    Banco / Institución: {persona?.pedidos[0]?.banco}
                    <br /> Tipo de consulta: {persona?.pedidos[0]?.tipoConsulta}
                  </List.Item>
                </div>
                <div className="flex-1">
                  Comentario del vendedor: {persona?.pedidos[0]?.comentarioVendedor || "Sin comentarios"}
                </div>
              </div>
            )}

          {'pedidos' in persona &&
            // persona?.pedidos[0]?.estado === 'SIN REVISION' &&
            persona?.enRevision?.username === username &&
            persona?.enRevision?.status && (
              <Form onFinish={onFinish} form={form}>
                <Form.Item
                  label="Estado"
                  name="estado"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor seleccione una opcion',
                    },
                  ]}
                >
                  <Select onChange={handleEstadoChange}>
                    {ESTADOS.map((estado) => (
                      <Option key={estado} value={estado}>
                        {estado}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Comentario" name="comentario">
                  <TextArea rows={2} />
                </Form.Item>
                {enableFields && (
                  <>
                    <Form.Item
                      label="Total"
                      name="total"
                      rules={[
                        {
                          required: true,
                          message: 'Por favor ingrese un total',
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                    <Form.Item
                      label="Cantidad cuotas"
                      name="cantidadCuotas"
                      rules={[
                        {
                          required: true,
                          message: 'Por favor ingrese un cantidad',
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                    <Form.Item
                      label="Monto cuota"
                      name="montoCuota"
                      rules={[
                        {
                          required: true,
                          message: 'Por favor ingrese un monto',
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </>
                )}

                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Aceptar
                  </Button>
                </Form.Item>
              </Form>
            )}
        </>
      )}

      <Table
        columns={columns}
        dataSource={getDataTable(persona.pedidos)}
        size="small"
      />
    </div>
  );
}
