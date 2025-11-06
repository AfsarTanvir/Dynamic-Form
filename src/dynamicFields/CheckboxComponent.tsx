import { useState } from "react";
import { Checkbox, type CheckboxChangeEvent } from "antd";
import { useSaveDataReducer } from "./hook/useSaveDataReducer";
import type { FieldsType } from "../utils/types";

function CheckboxComponent({ field }: { field: FieldsType }) {
  const [checkboxField, setCheckboxField] = useState(
    Boolean(field.defaultValue)
  );
  const saveData = useSaveDataReducer();

  const handleChange = (e: CheckboxChangeEvent) => {
    const value = e.target.checked;
    setCheckboxField(value);
    saveData(field.id, value);
  };

  return (
    <>
      <Checkbox checked={checkboxField} onChange={handleChange}>
        {field.label}
      </Checkbox>
    </>
  );
}

export default CheckboxComponent;
