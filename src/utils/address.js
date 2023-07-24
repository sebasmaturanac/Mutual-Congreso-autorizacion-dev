export const formatAddress = ({ direccion, numero, piso, departamento }) => {
  let address = `${direccion} ${numero}`;
  if (piso) {
    address += ` - ${piso} ${departamento}`;
  }
  return address;
};
