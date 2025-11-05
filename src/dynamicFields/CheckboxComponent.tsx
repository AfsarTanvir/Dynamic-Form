import { useState } from "react";
import type { FieldsType } from "../features/Home";
import { Checkbox, type CheckboxChangeEvent } from "antd";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";

function CheckboxComponent({ field }: { field: FieldsType }) {
  const [checkboxField, setCheckboxField] = useState(
    Boolean(field.defaultValue)
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: CheckboxChangeEvent) => {
    const value = e.target.checked;
    setCheckboxField(value);
    dispatch(dynamicFormSaveData.actions.specialOffersDataInsert(value));
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
