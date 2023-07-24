import openSocket from 'socket.io-client';
import { baseURL } from '../config/url';

const socket = openSocket(baseURL.replace('/api', ''));
socket.on('connected', () => console.debug('Socket Conectado'));

export const subscribeToRevision = (handleSocketUpdate) => {
  socket.on('revision', handleSocketUpdate);
};

export const subscribeToNuevoPedido = (handleNuevoPedidoUpadate) => {
  socket.on('nuevoPedido', handleNuevoPedidoUpadate);
};

export const subscribeToNuevaPersona = (handleNuevaPersona) => {
  socket.on('nuevaPersona', handleNuevaPersona);
};
