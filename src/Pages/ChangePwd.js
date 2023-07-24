import React, { useState } from 'react';
import { Spin, message, Input, Modal } from 'antd';
import API from '../lib/api';
import routes from '../routes';
import logo from '../assets/logo.png';
import { LockOutlined, LoadingOutlined } from '@ant-design/icons';

const ChangePwd = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [actualPwd, setActualPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [newPwdRepeat, setNewPwdRepeat] = useState('');

  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (newPwd !== newPwdRepeat) return Modal.error({
        title: 'Error',
        content: 'La contraseña nueva y su repetida no coinciden',
      });
      setLoading(true);
      const { mensaje } = await API.post('/auth/changePwd', { actualPwd, newPwd }, {
        headers: { Authorization: sessionStorage.getItem('token') },
      });
      message.success(mensaje);
      setLoading(false);
      // le cerramos sesion
      sessionStorage.clear();
      history.push(routes.login);
    } catch (error) {
      console.log('error: ', error);
      message.warn(error.response.data.mensaje);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="w-full min-h-screen flex justify-center items-center">
          <Spin indicator={antIcon} />
        </div>
      )}
      <div className="flex w-full min-h-screen justify-center items-center bg-gray-200">
        <div className="w-12/12 p-8 bg-white border rounded">
          <h1 style={{ textAlign: 'center', fontSize: 30 }} >Cambiar contraseña</h1>
          <div className="flex justify-center m-4">
            <img alt="logo" className="w-24 h-24 rounded-full" src={logo} />
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              value={actualPwd}
              onChange={e => setActualPwd(e.target.value)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              type="password"
              style={{ marginBottom: 10 }}
              placeholder="Contraseña actual"
            />
            <Input
              value={newPwd}
              onChange={e => setNewPwd(e.target.value)}
              size="large"
              style={{ marginBottom: 10 }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Nueva contraseña" />
            <Input
              value={newPwdRepeat}
              onChange={e => setNewPwdRepeat(e.target.value)}
              size="large"
              style={{ marginBottom: 10 }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Repita la nueva contraseña" />
            <div className="flex justify-center">
              <button
                className="p-2 border rounded mx-auto transition  duration-500 ease-in-out  hover:bg-blue-400 hover:text-white"
                type="submit"
              >
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePwd;
