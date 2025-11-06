import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import { useSaveDataReducer } from "./hook/useSaveDataReducer";
import type { FieldsType } from "../utils/types";

function PasswordComponent({ field }: { field: FieldsType }) {
  const saveData = useSaveDataReducer();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    saveData(field.id, value);
  };

  return (
    <>
      <Form.Item
        name={["user", "password"]}
        label={field.label}
        rules={buildValidationRules(field.validations)}
      >
        <Input
          type="password"
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </Form.Item>
    </>
  );
}
export default PasswordComponent;
