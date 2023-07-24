import React, { useEffect } from 'react';
import { Button } from 'antd';
import routes from '../routes';

const AuthLayout = ({ children, history }) => {
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      history.push(routes.login);
      return;
    }
  }, [history]);

  const handleCambiarContraseña = () => {
    history.push(routes.changePwd);
  };

  const onLogout = () => {
    sessionStorage.clear();
    history.push(routes.login);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row flex-wrap w-full p-2 h-20 border-b border border-gray-700 justify-between items-center">
        <h1 className="block uppercase font-bold text-2x1 m-0">
          Panel de Administracion
        </h1>
        <div className="flex justify-center items-center">
          <div className="mx-2">
            Usuario: <b>{sessionStorage.getItem('username')}</b>
          </div>
          <Button
            className="mr-4"
            type="default"
            shape="round"
            onClick={handleCambiarContraseña}
          >
            Cambiar contraseña
          </Button>
          <Button type="default" shape="round" onClick={onLogout}>
            Salir
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
