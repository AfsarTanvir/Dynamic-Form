import { useState, type ChangeEvent } from "react";
import type { FieldsType } from "../features/Home";

function CheckboxComponent({ field }: { field: FieldsType }) {
  const [checkboxField, setCheckboxField] = useState(
    Boolean(field.defaultValue)
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCheckboxField(event.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        name={field.name}
        checked={checkboxField}
        onChange={handleChange}
      />
      {field.label}
    </label>
  );
}

export default CheckboxComponent;
