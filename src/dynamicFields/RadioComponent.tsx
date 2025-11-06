import { Form, Radio, type RadioChangeEvent } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";
import { useSaveDataReducer } from "./hook/useSaveDataReducer";
import type { FieldsType } from "../utils/types";

function RadioComponent({ field }: { field: FieldsType }) {
  const saveData = useSaveDataReducer();

  const handleChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    saveData(field.id, value);
  };

  return (
    <>
      <Form.Item
        name={field.name}
        label={field.label}
        rules={buildValidationRules(field.validations)}
      >
        <Radio.Group onChange={handleChange}>
          {field.options?.map((op) => (
            <Radio key={op.value} value={op.value}>
              {op.label}
            </Radio>
          ))}
        </Radio.Group>
      </Form.Item>
    </>
  );
}

export default RadioComponent;
