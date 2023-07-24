import React, { useRef, useState, useEffect } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const Signature = ({ onSaveSignature }) => {
  const signatureRef = useRef({});
  const [imageData, setImageData] = useState('');

  const saveSignature = (signature) => {
    setImageData(signature);
  };

  useEffect(() => {
    onSaveSignature(imageData);
  }, [imageData, onSaveSignature]);

  return (
    <div className="w-full">
      <label className="block p-2 uppercase font-bold text-xs">
        Firma (la misma que el documento)
      </label>
      <button
        onClick={() => {
          signatureRef.current.clear();
          saveSignature(null);
        }}
      >
        Limpiar Firma
      </button>
      <SignatureCanvas
        canvasProps={{
          className:
            'w-11/12 md:w-2/4 mx-auto md:mx-0 h-40 border border-gray-700',
        }}
        ref={signatureRef}
        onEnd={() =>
          saveSignature(
            signatureRef.current.getTrimmedCanvas().toDataURL('image/jpg'),
          )
        }
      />
      <small className="text-red-700">
        IMPORTANTE: para firmar utilice el ratón de la computadora o, si está
        desde un celular, firme con su dedo en la pantalla táctil.
      </small>
    </div>
  );
};

export default Signature;
