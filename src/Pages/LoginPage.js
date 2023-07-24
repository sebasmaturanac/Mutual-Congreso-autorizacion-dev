import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message, Input } from 'antd';
import API from '../lib/api';
import routes from '../routes';
import logo from '../assets/logo.png';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage = props => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const { mensaje, respuesta } = await API.post('/auth/login', { username, password });
      message.success(mensaje);
      sessionStorage.setItem('token', respuesta[0].token);
      sessionStorage.setItem('username', respuesta[0].username);
      sessionStorage.setItem('role', respuesta[0].role);
      sessionStorage.setItem('alias', respuesta[0].alias);
      setLoading(false);
      props.history.push(routes.dashboard);
    } catch (error) {
      console.log('error: ', error);
      message.warn('Error - Por favor verifique sus credenciales');
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
          <div className="flex justify-center m-4">
            <img alt="logo" className="w-24 h-24 rounded-full" src={logo} />
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              value={username}
              onChange={e => setUsername(e.target.value)}
              size="large"
              style={{ marginBottom: 10 }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Usuario"
            />
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              size="large"
              style={{ marginBottom: 10 }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña" />
            <div className="flex justify-center">
              <button
                className="p-2 border rounded mx-auto transition  duration-500 ease-in-out  hover:bg-blue-400 hover:text-white"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
