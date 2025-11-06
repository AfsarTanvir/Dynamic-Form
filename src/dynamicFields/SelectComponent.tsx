import { type ChangeEvent } from "react";
import type { FieldsType } from "../features/Home";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";

function SelectComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    switch (field.id) {
      case "country":
        dispatch(dynamicFormSaveData.actions.countryDataInsert(value));
        break;
      case "state":
        dispatch(dynamicFormSaveData.actions.stateDataInsert(value));
        break;
      case "offerType":
        dispatch(dynamicFormSaveData.actions.offerTypeDataInsert(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="gapping">
      <Select placeholder={field.placeholder} defaultValue={field.defaultValue}>
        {field.options?.map((op) => (
          <Select.Option
            key={op.value}
            value={op.value}
            onChange={handleChange}
          >
            {op.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}

export default SelectComponent;
