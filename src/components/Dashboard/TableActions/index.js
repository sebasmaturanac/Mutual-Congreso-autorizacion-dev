import React from 'react';
import { Space, Button, Tooltip, Badge } from 'antd';
import {
  PictureOutlined,
  LinkOutlined,
  DollarCircleOutlined,
  FilePdfOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

export default function TableActions({
  record,
  handleVerFotos,
  handleEnableEdit,
  handleGestionar,
  handleDownloadPDF,
  loadingPDF,
  handleRevision,
  loadingRevision,
  isVendedor = false,
}) {
  const username = sessionStorage.getItem('username');
  const estaEnRevision =
    record?.enRevision?.status && record?.enRevision?.username === username;
  const enRevisionPorOtraPersona =
    record?.enRevision?.status && record?.enRevision?.username !== username;

  const getTooltipTitle = () => {
    if (estaEnRevision && record?.pedidos[0]?.estado !== 'SIN REVISION') {
      return 'Liberar edición';
    }
    if (!estaEnRevision && record?.pedidos[0]?.estado !== 'SIN REVISION') {
      return 'Habilitar edición';
    }
    return estaEnRevision ? 'Liberar revisión' : 'Marcar en revisión';
  };

  return (
    <Space size="middle">
      {enRevisionPorOtraPersona ? (
        <Badge
          status="processing"
          text={`En revisión (${record?.enRevision?.username})`}
        />
      ) : (
        !isVendedor && (
          <Tooltip title={getTooltipTitle()}>
            <Button
              type="text"
              disabled={loadingRevision}
              style={{ color: estaEnRevision ? 'red' : 'green' }}
              onClick={handleRevision(record._id, !record?.enRevision?.status)}
              icon={<FileSearchOutlined />}
            />
          </Tooltip>
        )
      )}
      <Tooltip title="Gestionar pedido">
        <Button
          disabled={enRevisionPorOtraPersona}
          type="text"
          onClick={handleGestionar(record)}
          icon={<DollarCircleOutlined />}
        />
      </Tooltip>
      <Tooltip title="Ver fotos">
        <Button
          type="text"
          onClick={handleVerFotos(record._id)}
          icon={<PictureOutlined />}
        />
      </Tooltip>
      {!isVendedor && (
        <Tooltip title="Habilitar URL edición">
          <Button
            type="text"
            onClick={handleEnableEdit(record.dni)}
            icon={<LinkOutlined />}
          />
        </Tooltip>
      )}
      <Tooltip title="Descargar PDF">
        <Button
          type="text"
          disabled={loadingPDF}
          onClick={handleDownloadPDF(record._id)}
          icon={<FilePdfOutlined />}
        />
      </Tooltip>
    </Space>
  );
}
