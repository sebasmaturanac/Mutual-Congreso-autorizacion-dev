import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

const DownloadPDF = ({ document, name }) => {
  return (
    <div className="w-full h-screen flex justify-center">
      <PDFDownloadLink document={document} fileName={name}>
        {({ loading }) => (
          <button
            className="rounded-full mt-16 p-4 text-3xl border-2 border-black cursor-pointer transition duration-200 ease-in-out hover:bg-black hover:text-white"
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Descargar Documento'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default DownloadPDF;
