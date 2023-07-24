import React from 'react';
import { Drawer, Button } from 'antd';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ImgPDFDownload from '../../ImgPDFDownload';
import UploadFilesGroup from '../../UploadFilesGroup';

export default function PhotosDrawer({
  persona,
  isDrawerVisible,
  closeDrawer,
  fotos,
}) {
  return (
    <Drawer
      title={`Fotos de ${persona.apellido.toUpperCase()}, ${persona.nombre.toUpperCase()}`}
      placement="right"
      closable={false}
      onClose={closeDrawer}
      visible={isDrawerVisible}
      width={500}
    >
      <PDFDownloadLink
        document={<ImgPDFDownload fotos={fotos} />}
        fileName={`Mutual Congreso Fotos ${persona.dni}`}
      >
        {({ loading }) => (
          <Button
            type="primary"
            className="w-1/2 my-4"
            loading={loading || false}
          >
            {loading ? 'Generando' : 'Bajar Fotos'}
          </Button>
        )}
      </PDFDownloadLink>
      {fotos && (
        <UploadFilesGroup
          defaultValues={persona.fotos}
          idPersona={persona._id}
        />
      )}
    </Drawer>
  );
}
