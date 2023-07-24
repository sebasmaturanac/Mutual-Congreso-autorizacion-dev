import React from 'react';
import { Input as InputAnt, DatePicker } from 'antd';
import { Controller } from 'react-hook-form';

const Input = ({
  autoComplete = '',
  addOn,
  label,
  name,
  placeholder,
  required,
  errors,
  control,
  type = 'text',
  ...otherProps
}) => {
  function onChange() {}

  const errorStyle = errors[`${name}`]
    ? { borderColor: '#f56565', borderWidth: 2 }
    : {};

  const input = () =>
    type !== 'date' ? (
      <InputAnt
        style={errorStyle}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...otherProps}
      />
    ) : (
      <DatePicker
        style={errorStyle}
        onChange={onChange}
        format="DD/MM/YYYY"
        placeholder={placeholder}
      />
    );

  return (
    <div className={' px-2 my-3 w-full ' + addOn}>
      <label style={{ whiteSpace: 'pre' }}>{label}</label>
      <Controller
        as={input()}
        name={name}
        rules={{ required }}
        control={control}
      />
    </div>
  );
};

export default Input;
