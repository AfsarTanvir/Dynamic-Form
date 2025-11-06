import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import { useSaveDataReducer } from "./hook/useSaveDataReducer";
import type { FieldsType } from "../utils/types";

function TextComponent({ field }: { field: FieldsType }) {
  const saveData = useSaveDataReducer();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    saveData(field.id, value);
  };


  return (
    <>
      <Form.Item
        name={["user", field.id]}
        label={field.label}
        rules={buildValidationRules(field.validations)}
      >
        <Input
          type="text"
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </Form.Item>
    </>
  );
}

export default TextComponent;
