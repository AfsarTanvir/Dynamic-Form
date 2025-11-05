import type { FieldsType } from "../features/Home";
import { Form, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";
import { buildValidationRules } from "../utils/validationHelpers";

function NumberComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: number | null) => {
    switch (field.id) {
      case "age":
        if (value)
          dispatch(dynamicFormSaveData.actions.ageTypeDataInsert(value));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Form.Item
        name={["user", field.id]}
        label={field.label}
        rules={buildValidationRules(field.validations)}
      >
        <InputNumber
          placeholder={field.placeholder}
          style={{ width: "100%" }}
          onChange={handleChange}
        />
      </Form.Item>
    </>
  );
}

export default NumberComponent;
