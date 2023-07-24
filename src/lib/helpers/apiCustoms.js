import moment from 'moment';

export const formatDataEdit = (defaultValues) => {
  if (!defaultValues) return {};
  if (defaultValues.domicilio) {
    defaultValues.calle = defaultValues.domicilio.direccion;
    defaultValues.calleNumero = defaultValues.domicilio.numero;
    defaultValues.callePiso = defaultValues.domicilio.piso;
    defaultValues.calleDepartamento = defaultValues.domicilio.departamento;
    delete defaultValues.domicilio;
  }

  // Fechas

  defaultValues.fechaEmpresaIngreso = moment(defaultValues.fechaEmpresaIngreso);

  defaultValues.fechaNacimiento = moment(defaultValues.fechaNacimiento);

  return defaultValues;
};

export const formatDataUpload = (valuesfromForm) => {
  const values = valuesfromForm;
  const domicilio = {
    direccion: values.calle,
    numero: values.calleNumero,
    piso: values.callePiso,
    departamento: values.calleDepartamento,
  };

  delete values.calle;
  delete values.calleNumero;
  delete values.callePiso;
  delete values.calleDepartamento;

  // Fechas
  values.fechaNacimiento = moment(
    values.fechaNacimiento,
    'DD/MM/YYYY',
  ).toISOString();
  values.fechaEmpresaIngreso = moment(
    values.fechaEmpresaIngreso,
    'DD/MM/YYYY',
  ).toISOString();

  return { ...values, domicilio };
};
