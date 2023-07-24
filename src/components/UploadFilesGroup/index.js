import React from 'react';
import UploadFile from '../UploadFile';

const uploadArray = [
  { label: 'imagen1', value: 'imagen1' },
  { label: 'imagen2', value: 'imagen2' },
  { label: 'imagen3', value: 'imagen3' },
  { label: 'imagen4', value: 'imagen4' },
  { label: 'imagen5', value: 'imagen5' },
  { label: 'imagen6', value: 'imagen6' },
  { label: 'imagen7', value: 'imagen7' },
  { label: 'imagen8', value: 'imagen8' },
  { label: 'imagen9', value: 'imagen9' },
  { label: 'imagen10', value: 'imagen10' },
];

export default function UploadFilesGroup({
  defaultValues,
  onOpdatePhotoState,
  idPersona = '', // usado para subir fotos si sos Admin
  token,
}) {
  return (
    <>
      <h2 className="text-center text-2xl">
        Imagenes (para cambiar una imagen haga click sobre la misma)
      </h2>
      <div className="flex justify-center max-w-2xl mx-auto">
        <div className="gridUploadImages">
          {uploadArray.map(({ label, value }) => (
            <UploadFile
              key={label}
              label={label}
              value={value}
              idPersona={idPersona}
              defaultValues={defaultValues}
              onOpdatePhotoState={onOpdatePhotoState}
              token={token}
            />
          ))}
        </div>
      </div>
    </>
  );
}
