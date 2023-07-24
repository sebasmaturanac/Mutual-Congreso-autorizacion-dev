import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { formatDataEdit } from '../../lib/helpers/apiCustoms';
import Input from '../Input';
import { Select } from 'antd';
import Signature from '../Signature';
import API from '../../lib/api';
import UploadFilesGroup from '../UploadFilesGroup';
import { Controller } from 'react-hook-form';

const { Option } = Select;

const cuentas = ['C.A', 'C.C'];

const Form = ({
  onUpdate,
  isEditUser,
  onSaveSignature = () => null,
  defaultValues,
  fromDashboard,
}) => {
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);

  useEffect(() => {
    const getProvincias = async () => {
      try {
        const { respuesta } = await API.get('/providers/provincias');
        setProvincias(respuesta);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    getProvincias();
  }, []);

  let dv = defaultValues ? formatDataEdit(defaultValues) : {};
  const { handleSubmit, errors, control } = useForm({
    defaultValues: dv,
    submitFocusError: true,
  });

  const handleChangeProvincia = (value) => {
    control.setValue('localidad', null);
    const idProvincia = value[1].key;
    API.get(`/providers/localidades/${idProvincia}`)
      .then((res) => {
        const { respuesta } = res;
        setLocalidades(respuesta);
      })
      .catch((err) => console.log(err));
    return value[0];
  };

  const selectProvincia = () => {
    const errorSelectClass = errors['provincia'] ? 'errorSelect' : '';
    return (
      <Select
        placeholder="Seleccione una provincia"
        className={errorSelectClass}
      >
        {provincias.map((provincia) => (
          <Option key={provincia.id} value={provincia.nombre.toUpperCase()}>
            {provincia.nombre.toUpperCase()}
          </Option>
        ))}
      </Select>
    );
  };

  const selectLocalidad = () => {
    const errorSelectClass = errors['localidad'] ? 'errorSelect' : '';
    return (
      <Select
        autoComplete="DontAutoCompleteMotherFucker"
        disabled={!localidades}
        className={errorSelectClass}
        showSearch
        placeholder="Seleccione una localidad"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {localidades.map((localidad, index) => (
          <Option
            key={`${localidad.nombre}${index}`}
            value={localidad.nombre.toUpperCase()}
          >
            {localidad.nombre.toUpperCase()}
          </Option>
        ))}
      </Select>
    );
  };

  const selectCuenta = () => {
    const errorSelectClass = errors['cuenta'] ? 'errorSelect' : '';
    return (
      <Select
        autoComplete="DontAutoCompleteMotherFucker"
        className={errorSelectClass}
        placeholder="Seleccione tipo de cuenta"
      >
        {cuentas.map((cuenta) => (
          <Option key={cuenta} value={cuenta}>
            {cuenta}
          </Option>
        ))}
      </Select>
    );
  };

  return (
    <form className="mb-16" onSubmit={handleSubmit(onUpdate)}>
      <div className="text-center md:text-left my-4 border-b-2 border-gray-600 clear-both">
        <p className="block uppercase font-bold text-lg">Datos de la persona</p>
      </div>
      <Input
        addOn="float-left md:w-3/12 "
        label="Nombre"
        name="nombre"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-3/12 "
        label="Apellido"
        name="apellido"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-3/12 "
        label="DNI"
        name="dni"
        control={control}
        errors={errors}
        type="number"
        required
      />
      <Input
        addOn="float-left md:w-3/12"
        label="Profesion"
        name="profesion"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-4/12"
        label="Nacionalidad"
        name="nacionalidad"
        control={control}
        errors={errors}
        required
      />
      <Input
        autoComplete="DontAutoCompleteMotherFucker"
        addOn="float-left md:w-4/12"
        label="Estado Civil"
        name="estadoCivil"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-4/12"
        label="Email"
        name="email"
        control={control}
        errors={errors}
      />
      <Input
        addOn="float-left md:w-1/3"
        label="CUIT/CUIL/CDI"
        name="cuit"
        control={control}
        errors={errors}
      />
      <Input
        addOn="float-left md:w-1/3"
        label="Telefono"
        name="telefono1"
        control={control}
        errors={errors}
      />
      <Input
        addOn="float-left md:w-1/3"
        label="Celular"
        name="celular1"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-3/12 "
        label="Fecha de Nacimiento"
        name="fechaNacimiento"
        placeholder="DD/MM/AAAA"
        control={control}
        errors={errors}
        required
        type="date"
      />
      <Input
        addOn="float-left md:w-9/12 "
        label="Lugar de Nacimiento"
        name="lugarNacimiento"
        control={control}
        errors={errors}
        required
      />
      <div className="text-center md:text-left my-4 border-b-2 border-gray-600 clear-both">
        <p className="block uppercase font-bold text-lg">Domicilio Personal</p>
      </div>
      <div className={' px-2 my-3 w-full float-left md:w-1/2 flex flex-col'}>
        <label style={{ whiteSpace: 'pre', marginRight: 10 }}>Provincia</label>
        <Controller
          as={selectProvincia()}
          name="provincia"
          onChange={handleChangeProvincia}
          rules={{ required: true }}
          control={control}
        />
      </div>
      <div className={' px-2 my-3 w-full float-left md:w-1/2 flex flex-col'}>
        <label style={{ whiteSpace: 'pre', marginRight: 10 }}>Localidad</label>
        <Controller
          as={selectLocalidad()}
          name="localidad"
          rules={{ required: true }}
          control={control}
        />
      </div>
      <Input
        addOn="float-left md:w-1/4 "
        label="Calle"
        name="calle"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-1/4 "
        label="Numero"
        name="calleNumero"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-1/4 "
        label="Piso"
        name="callePiso"
        control={control}
        errors={errors}
        maxLength={2}
        placeholder="Ej: 2"
      />
      <Input
        addOn="float-left md:w-1/4 "
        label="Departamento"
        name="calleDepartamento"
        control={control}
        errors={errors}
        maxLength={5}
        placeholder="Ej: A"
      />
      <Input
        addOn="float-left md:w-1/2 "
        label="Codigo Postal"
        name="codigoPostal"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-1/2 "
        label="Barrio"
        name="barrio"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-full "
        label="Referencia"
        name="referencia"
        control={control}
        errors={errors}
      />
      <div className="text-center md:text-left my-4 border-b-2 border-gray-600 clear-both">
        <p className="block uppercase font-bold text-lg">Datos laborales</p>
      </div>
      <Input
        addOn="float-left md:w-1/3"
        label="Empresa"
        name="empresa"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-1/3"
        label="Seccion/Cargo"
        name="seccion"
        control={control}
        errors={errors}
        required
      />
      <Input
        addOn="float-left md:w-1/3"
        label="Antigüedad (en Años)"
        name="antiguedad"
        control={control}
        errors={errors}
        required
        type="number"
      />
      <Input
        addOn="md:w-3/12 "
        label="Fecha de Ingreso"
        name="fechaEmpresaIngreso"
        placeholder="DD/MM/AAAA"
        control={control}
        errors={errors}
        required
        type="date"
      />
      <div className="text-center md:text-left my-4 border-b-2 border-gray-600 clear-both">
        <p className="block uppercase font-bold text-lg">Datos bancarios</p>
      </div>
      <div className={' px-2 my-3 w-full float-left md:w-1/2 flex flex-col'}>
        <label style={{ whiteSpace: 'pre', marginRight: 10 }}>
          Tipo de cuenta
        </label>
        <Controller
          as={selectCuenta()}
          name="cuenta"
          rules={{ required: true }}
          control={control}
        />
      </div>
      <Input
        addOn="float-left md:w-1/2"
        label="Numero de cuenta"
        name="numeroCuenta"
        control={control}
        errors={errors}
        type="number"
        required
      />
      {!fromDashboard && (
        <>
          <div className="text-center md:text-left my-4 border-b-2 border-gray-600 clear-both">
            <p className="block uppercase font-bold text-lg">Datos finales</p>
          </div>
          <Signature onSaveSignature={onSaveSignature} />
          <Input
            addOn="my-5 md:w-1/3"
            label="Aclaracion"
            name="firmaAclaracion"
            control={control}
            errors={errors}
            required
          />
        </>
      )}
      {isEditUser && (
        <UploadFilesGroup
          defaultValues={defaultValues && defaultValues.fotos}
        />
      )}
      <div className="w-full flex justify-center">
        <input
          type="submit"
          value={fromDashboard ? 'Actualizar datos' : 'Generar documento'}
          className="rounded-full mx-8 p-2 text-lg border-2 border-black cursor-pointer transition duration-200 ease-in-out hover:bg-black hover:text-white"
        />
      </div>
    </form>
  );
};

export default Form;
