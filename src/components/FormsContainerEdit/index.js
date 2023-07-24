import React, { useState, useEffect } from 'react';
import Form from '../Form';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import API from '../../lib/api';
import { message } from 'antd';
import { useParams } from 'react-router-dom';
import { formatDataUpload } from '../../lib/helpers/apiCustoms';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

const FormsContainerEdit = () => {
  const history = useHistory();
  let { dni } = useParams();
  const [loading, setLoading] = useState(false);
  const [loadedValues, setLoadedValues] = useState();

  useEffect(() => {
    if (dni) {
      const fetchValues = async () => {
        setLoading(true);
        const result = await API.get(`/personas/dni/${dni}`, {
          headers: {
            Authorization: sessionStorage.getItem('token'),
          },
        });
        const data = result.respuesta[0];
        setLoadedValues(data);
        setLoading(false);
      };
      fetchValues();
    }
  }, [dni]);

  const updateData = async (values) => {
    try {
      const { _id } = loadedValues;
      const payload = formatDataUpload({ ...values, _id });
      setLoading(true);
      const { mensaje } = await API.put('/personas', payload, {
        headers: {
          Authorization: sessionStorage.getItem('token'),
        },
      });
      message.success(mensaje);
      history.push('/dashboard');
    } catch (error) {
      message.error(
        'Se detecto un error. Por favor, corrobore todos los campos completados',
      );
    }
    setLoading(false);
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Form
          fromDashboard
          onUpdate={updateData}
          defaultValues={loadedValues}
        />
      )}
    </div>
  );
};

export default FormsContainerEdit;
