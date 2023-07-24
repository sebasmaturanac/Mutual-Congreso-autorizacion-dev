import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
import Resizer from 'react-image-file-resizer';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import API from '../../lib/api';
import { urlToBase64 } from '../../utils/img';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const resizeImage = async (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1360,
      768,
      'JPEG',
      100,
      0,
      async (uri) => {
        const newFile = await base64ToFile(uri);
        resolve(newFile);
      },
      'base64',
    );
  });

const base64ToFile = async (url) => {
  const blob = await (await fetch(url)).blob();
  return new File([blob], 'File name', { type: 'image/png' });
};

function beforeUpload(file) {
  const isJpgOrPng =
    file.type === 'image/jpeg' ||
    file.type === 'image/jpg' ||
    file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Solo se aceptan archivos de imaganes JPG y PNG');
  }
  const isLt2M = file.size / 1024 / 1024 < 1;

  if (!isLt2M) {
    message.error('La imagen debe ser menor a 1MB!');
  }
  return isJpgOrPng && isLt2M;
}

const UploadFile = ({
  label,
  value,
  defaultValues,
  onOpdatePhotoState = () => null,
  idPersona = '', // usado para subir fotos si sos Admin
  token,
}) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const urlImage = defaultValues && defaultValues[value];
      if (urlImage) {
        const imgBase64 = await urlToBase64(urlImage);
        setImage(imgBase64);
      }
    };
    fetchImages();
  }, [defaultValues, value]);

  const uploadButton = (
    <div style={{ marginTop: 40 }}>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text mt-4 font-bold">{`Subir ${label}`}</div>
    </div>
  );

  const handleCustomRequest = async (info) => {
    try {
      setImage('');
      setLoading(true);
      const imageResize = await resizeImage(info.file);
      const isValid = beforeUpload(imageResize);
      if (isValid) {
        let formData = new FormData();
        if (idPersona) {
          formData.append('_id', idPersona);
        }
        formData.append('file', imageResize);
        formData.append('fotoTarget', value);
        const URL = idPersona ? '/uploads/update' : '/uploads/file';
        await API.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
          },
        });
        getBase64(info.file, (imageUrl) => {
          setImage(imageUrl);
          onOpdatePhotoState(value);
          setLoading(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>{label}</h3>
      <Upload
        name="file"
        accept=".png, .jpg, .jpeg"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={handleCustomRequest}
      >
        {image ? (
          <img src={image} alt="avatar" style={{ width: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default UploadFile;
