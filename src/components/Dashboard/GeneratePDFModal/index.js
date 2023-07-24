import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import { PDFDownloadLink } from '@react-pdf/renderer';
import SencilloCredito from '../../SencilloCredito';
import { Button } from 'antd';
import MutualCongreso from '../../MutualCongreso';

export default function GeneratePDFModal({
  modalPDF,
  closeModal,
  predefinedState,
}) {
  return (
    <Modal
      title="Generar PDF"
      visible={modalPDF}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <div className="w-full text-center flex flex-col">
        {predefinedState && (
          <>
            <PDFDownloadLink
              document={
                <SencilloCredito
                  state={predefinedState}
                  signature={predefinedState.fotos.firma}
                />
              }
              fileName={`Sencillo Credito ${predefinedState.dni}`}
            >
              {({ loading }) => (
                <Button
                  type="primary"
                  className="w-1/2 my-4"
                  loading={loading || false}
                >
                  {loading
                    ? 'Generando Sencillo Credito'
                    : 'Bajar PDF - Sencillo Credito'}
                </Button>
              )}
            </PDFDownloadLink>
            <PDFDownloadLink
              document={
                <MutualCongreso
                  state={predefinedState}
                  signature={predefinedState.fotos.firma}
                />
              }
              fileName={`Mutual Congreso ${predefinedState.dni}`}
            >
              {({ loading }) => (
                <Button
                  type="primary"
                  className="w-1/2 my-4"
                  loading={loading || false}
                >
                  {loading
                    ? 'Generando Mutual Congreso'
                    : 'Bajar PDF - Mutual Congreso'}
                </Button>
              )}
            </PDFDownloadLink>
          </>
        )}
      </div>
    </Modal>
  );
}
