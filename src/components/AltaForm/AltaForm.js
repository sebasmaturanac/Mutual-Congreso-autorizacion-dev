import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import API from '../../lib/api';
import TextArea from 'antd/lib/input/TextArea';
const { Option } = Select;

const sexos = ['MASCULINO', 'FEMENINO'];
const tipoDeConsultas = [
  'PRESTAMO',
  'ELECTRODOMESTICO',
  'PRESTAMO Y ELECTRODOMESTICO',
];

export default function AltaForm({
  handleNext,
  dni,
  handleToken,
  persona,
  isFormEdition,
  handleNumeroTramite,
}) {
  const [loading, setLoading] = useState(false);
  const [vendedores, setVendedores] = useState([]);
  const [bancos, setBancos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bancos = API.get('/providers/bancos');
        const vendedores = API.get('/providers/vendedores');
        const response = await Promise.all([bancos, vendedores]);
        setBancos(response[0].respuesta);
        setVendedores(response[1].respuesta);
      } catch (error) {
        message.error(error.message);
      }
    };
    fetchData();
  }, []);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { respuesta } = await API[
        persona && isFormEdition ? 'put' : 'post'
      ](
        persona && !isFormEdition ? '/personas/pedido' : '/personas',
        persona ? { ...values, _id: persona._id } : values,
        persona ? { headers: { Authorization: persona.token } } : {},
      );
      if (!persona) handleToken(respuesta[0].token);
      handleNumeroTramite(respuesta[0]?.numeroTramite);
      handleNext();
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }
  };

  const initialValues = persona || { dni };

  return (
    <div className="my-4">
      <Form onFinish={onFinish} initialValues={initialValues}>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{ required: true, message: 'Por favor ingrese un nombre' }]}
        >
          <Input disabled={persona && !isFormEdition} />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="apellido"
          rules={[{ required: true, message: 'Por favor ingrese un apellido' }]}
        >
          <Input disabled={persona && !isFormEdition} />
        </Form.Item>
        <Form.Item
          label="DNI"
          name="dni"
          rules={[{ required: true, message: 'Por favor ingrese un DNI' }]}
        >
          <Input type="number" disabled />
        </Form.Item>

        <Form.Item
          label="Sexo"
          name="sexo"
          rules={[{ required: true, message: 'Por favor seleccione un sexo' }]}
        >
          <Select disabled={persona && !isFormEdition}>
            {sexos.map((sexo) => (
              <Option key={sexo} value={sexo}>
                {sexo}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Banco / Institución"
          name="banco"
          rules={[{ required: true, message: 'Por favor seleccione un banco' }]}
        >
          <Select
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {bancos.map((banco) => (
              <Option key={banco.id} value={banco.nombre}>
                {banco.nombre}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Vendedor"
          name="vendedor"
          rules={[
            { required: true, message: 'Por favor seleccione un vendedor' },
          ]}
        >
          <Select
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {vendedores.map((vendedor) => (
              <Option key={vendedor.id} value={vendedor.nombre}>
                {vendedor.nombre}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Tipo consulta"
          name="tipoConsulta"
          rules={[
            {
              required: true,
              message: 'Por favor seleccione un tipo de consulta',
            },
          ]}
        >
          <Select>
            {tipoDeConsultas.map((tipoConsulta) => (
              <Option key={tipoConsulta} value={tipoConsulta}>
                {tipoConsulta}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Comentario" name="comentarioVendedor">
          <TextArea rows={2} maxLength={50} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {persona ? 'Actualizar' : 'Crear'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
