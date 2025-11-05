import type { FieldsType } from "../features/Home";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { Form, Input } from "antd";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";

function PasswordComponent({
  field
}: {
  field: FieldsType
}) {
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
        rules={[
          {
            required: true,
            message: field.validations[0]?.message || "Password is required",
          },
          {
            min: 8,
            message: field.validations[1]?.message || "Enter a valid Password",
          },
        ]}
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
