import React, { useEffect, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { baseURL } from '../../../config/url';
import API from '../../../lib/api';

export default function AudioModal({ showAudioModal, toggleModal, persona }) {
  const [audioURL, setAudioURL] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAudioURL = async () => {
      try {
        setLoading(true);
        const { respuesta } = await API.get(
          `/personas/getAudio/${persona._id}`,
          {
            headers: {
              Authorization: sessionStorage.getItem('token'),
            },
          },
        );
        const { audioURL } = respuesta[0];
        if (audioURL) setAudioURL(audioURL);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (persona && showAudioModal) {
      getAudioURL();
    }
  }, [persona, showAudioModal]);

  useEffect(() => {
    if (!showAudioModal) setAudioURL('');
  }, [showAudioModal]);

  function beforeUpload(file) {
    const isAudioFormat =
      file.type === 'audio/ogg' ||
      file.type === 'audio/mp3' ||
      file.type === 'audio/mpeg' ||
      file.type === 'audio/wav';
    if (!isAudioFormat) {
      message.error('Solo puedes subir formatos de audio.');
    }
    return isAudioFormat;
  }

  const props = {
    name: 'audio',
    action: `${baseURL}/uploads/audio`,
    beforeUpload,
    headers: {
      Authorization: sessionStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*',
    },
    data: {
      userId: persona && persona._id,
    },
    showUploadList: {
      showRemoveIcon: false,
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} archivo subido correctamente`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} fallo.`);
      }
    },
  };

  return (
    <Modal
      title="Descargar o subir audios"
      visible={showAudioModal}
      onOk={toggleModal}
      onCancel={toggleModal}
    >
      <div className="flex flex-col justify-center items-center">
        {audioURL && !loading && (
          <audio controls className="mb-2">
            <source src={audioURL} type="audio/mp3" />
            Tu navegador no soporta reproducir MP3
          </audio>
        )}
        <Upload {...props}>
          <Button>
            <UploadOutlined /> Click para subir audio
          </Button>
        </Upload>
      </div>
    </Modal>
  );
}
