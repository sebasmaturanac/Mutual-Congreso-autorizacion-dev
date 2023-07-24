import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { baseURL } from '../../../config/url';

export default function UploadPDF({ token }) {
  function beforeUpload(file) {
    const isPDFFormat = file.type === 'application/pdf';
    if (!isPDFFormat) {
      message.error('Solo puedes subir formato PDF.');
    }
    return isPDFFormat;
  }

  const props = {
    name: 'pdf',
    action: `${baseURL}/uploads/pdf`,
    beforeUpload,
    multiple: true,
    headers: {
      Authorization: token,
      'Access-Control-Allow-Origin': '*',
    },
    showUploadList: {
      showRemoveIcon: false,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} archivo subido correctamente.`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} fallo.`);
      }
    },
  };

  return (
    <Upload {...props}>
      <Button>
        <UploadOutlined /> Click para subir varios pdf
      </Button>
    </Upload>
  );
}
