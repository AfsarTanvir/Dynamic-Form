import { Form, InputNumber } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import { useSaveDataReducer } from "./hook/useSaveDataReducer";
import type { FieldsType } from "../utils/types";

function NumberComponent({ field }: { field: FieldsType }) {
  const saveData = useSaveDataReducer();
  const handleChange = (value: number | null) => {
    saveData(field.id, value);
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
