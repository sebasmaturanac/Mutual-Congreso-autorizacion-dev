import React, { useState } from 'react';
import { Form, Input, Button, message, Modal, Alert } from 'antd';
import API from '../../lib/api';
import moment from 'moment';

export default function DNIForm({
  handleNext,
  handleDNI,
  handlePersonaLoaded,
}) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [persona, setPersona] = useState({});

  const handleClose = () => {
    setPersona({});
    setShowModal(false);
  };

  const onFinish = async ({ dni }) => {
    try {
      setLoading(true);
      const { respuesta } = await API.get(`/personas/dni/${dni}`);
      if (respuesta.length && respuesta[0].proximoPedido) {
        setPersona({
          ...respuesta[0],
          ...respuesta[0].pedidos[0],
        });
        setLoading(false);
        setShowModal(true);
      } else {
        handlePersonaLoaded(respuesta[0]);
        handleDNI(dni);
        handleNext();
      }
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="my-4">
        <Form onFinish={onFinish}>
          <Form.Item
            label="DNI"
            name="dni"
            rules={[
              { required: true, message: 'Por favor ingrese un DNI' },
              { min: 7, message: 'Por favor ingrese un DNI valido' },
              { max: 8, message: 'Por favor ingrese un DNI valido' },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Verificar
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Modal
        title="Usuario registrado"
        visible={showModal}
        onOk={handleClose}
        okText="Aceptar"
        onCancel={handleClose}
        cancelText="Cerrar"
      >
        <Alert
          message="Atención"
          description={persona.proximoPedido}
          type="warning"
          showIcon
        />
        <div style={{ padding: 16 }}>
          <p>Número trámite: {persona.numeroTramite}</p>
          <p>
            Nombre y Apellido: {persona.nombre} {persona.apellido}
          </p>
          <p>DNI: {persona.dni}</p>
          <p>Sexo: {persona.sexo}</p>
          <p>
            Fecha alta: {moment(persona.createdAt).format('DD/MM/yyyy HH:mm')}
          </p>
          <p>Estado: {persona?.estado?.toUpperCase()}</p>
        </div>
      </Modal>
    </>
  );
}
