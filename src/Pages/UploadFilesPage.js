import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import UploadFilesGroup from '../components/UploadFilesGroup';
import { Alert, notification } from 'antd';

const token = () => sessionStorage.getItem('token');

const initialState = {
  documentoFrente: false,
  documentoDorso: false,
  reciboSueldo: false,
  boletaServicio: false,
  cbuCuenta: false,
  movimientoBancario1: false,
  movimientoBancario2: false,
  movimientoBancario3: false,
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Formulario completo',
    description: 'Ya puede cerrar el navegador.',
  });
};

const UploadFilesPage = () => {
  const [state, dispatch] = useReducer(
    (state, value) => ({ ...state, ...value }),
    initialState,
  );

  if (!token()) {
    return <Redirect to="/" />;
  }

  const handleUpdatePhotoState = (foto) => dispatch({ [foto]: true });

  const allImageSetted = !Object.keys(state)
    .map((imageName) => state[imageName])
    .some((image) => !image);

  if (allImageSetted) {
    openNotificationWithIcon('success');
  }

  return (
    <>
      <div className="flex justify-center max-w-2xl mx-auto pt-4">
        {allImageSetted && (
          <Alert
            message="Todas las imágenes se subieron correctamente, ya puede cerrar el navegador."
            type="success"
            showIcon
          />
        )}
      </div>
      <UploadFilesGroup onOpdatePhotoState={handleUpdatePhotoState} />;
    </>
  );
};

export default UploadFilesPage;
