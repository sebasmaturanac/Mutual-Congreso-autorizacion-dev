import React from 'react';
import 'moment/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';
import { Input, DatePicker } from 'antd';
const { Search } = Input;

const { RangePicker } = DatePicker;

export default function ToolbarTable({
  handleSearch,
  handleFilterDate,
  placeholder,
  disabled
}) {
  const onChange = (value) => handleFilterDate(value);

  return (
    <div className="my-2 flex">
      <Search
        placeholder={placeholder}
        onChange={handleSearch}
        enterButton
        size="large"
        className="flex-1"
        disabled={disabled}
      />
      <div className="flex justify-center items-center mx-2">
        <span className="mr-2">Filtrar por fecha:</span>
        <RangePicker locale={locale} onChange={onChange} />
      </div>
    </div>
  );
}
