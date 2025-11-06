import type { FieldsType } from "../features/Home";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";
import { Form, Input } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";

function TextareaComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    switch (field.id) {
      case "comments":
        dispatch(dynamicFormSaveData.actions.commentDataInsert(value));
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
        <Input
          type="textarea"
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </Form.Item>
    </>
  );
}

export default TextareaComponent;
