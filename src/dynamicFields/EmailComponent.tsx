import type { FieldsType } from "../features/Home";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";
import { Form, Input } from "antd";

function EmailComponent({
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
        name={["user", "email"]}
        label={field.label}
        rules={[
          {
            required: true,
            message: field.validations[0]?.message || "Email is required",
          },
          {
            type: "email",
            message: field.validations[1]?.message || "Enter a valid email",
          },
        ]}
      >
        <Input
          type="email"
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </Form.Item>
    </>
  );
}

export default EmailComponent;
