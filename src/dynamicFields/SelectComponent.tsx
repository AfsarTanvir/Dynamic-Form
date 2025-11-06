import { Form, Select } from "antd";
import { useSaveDataReducer } from "./hook/useSaveDataReducer";
import { buildValidationRules } from "../utils/validationHelpers";
import type { FieldsType } from "../utils/types";

function SelectComponent({ field }: { field: FieldsType }) {
  const saveData = useSaveDataReducer();
  const handleChange = (newValue: string) => {
    saveData(field.id, newValue);
  };

  return (
    <Form.Item
      name={["user", field.name]}
      label={field.label}
      rules={buildValidationRules(field.validations)}
    >
      <Select placeholder={field.placeholder} onChange={handleChange}>
        {field.options?.map((op) => (
          <Select.Option key={op.value} value={op.value}>
            {op.label}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default SelectComponent;
