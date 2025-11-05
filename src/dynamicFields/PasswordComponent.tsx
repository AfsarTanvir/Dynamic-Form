import type { FieldsType } from "../features/Home";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { Form, Input } from "antd";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";
import { buildValidationRules } from "../utils/validationHelpers";

function PasswordComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(dynamicFormSaveData.actions.radioDataInsert(value));
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
