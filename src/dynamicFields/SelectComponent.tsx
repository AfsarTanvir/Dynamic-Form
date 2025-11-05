import { useState, type ChangeEvent } from 'react'
import type { FieldsType } from '../features/Home'

function SelectComponent({ field }: { field: FieldsType }) {
    const [selectField, setSelectField] = useState(field.defaultValue);

        const districtChange = (
          event: ChangeEvent<HTMLSelectElement>
        ): void => {
          const { value } = event.target;
            setSelectField(value);
        };
  return (
    <>
      <select onChange={districtChange} defaultValue={selectField?.toString()}>
        {field.options?.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectComponent