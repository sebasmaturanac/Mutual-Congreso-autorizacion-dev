import React from 'react';
import UploadPDF from '../Dashboard/UploadPDF';
import UploadFilesGroup from '../UploadFilesGroup';
import { Alert } from 'antd';

export default function ImagesForm({ token, fotos }) {
  return (
    <div className="my-4">
      <Alert style={{margin: 20}} message="Una vez subido el PDF o las imágenes, diríjase al final de la página y presione el botón FINALIZAR" type="info" showIcon />
      <h2 className="text-center text-2xl">Subir PDFs</h2>
      <div className="flex justify-center my-4">
        <UploadPDF token={token} />
      </div>
      <UploadFilesGroup token={token} defaultValues={fotos} />
    </div>
  );
}
