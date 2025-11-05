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

  const rulesArr: any[] = [];
  switch (field.id) {
    case "country":
      rulesArr.push({
        required: true,
        message: "Please select a country",
      });
      break;
    case "state":
      rulesArr.push({
        required: true,
        message: "Please select a state",
      });
      break;
    case "offerType":
      rulesArr.push({
        required: true,
        message: "Please select offer type",
      });
      break;
    default:
      break;
  }

  return (
    <>
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
    </>
  );
}

export default SelectComponent;
