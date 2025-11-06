import type { FieldsType } from "../features/Home";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";
import { Form, Radio, type RadioChangeEvent } from "antd";
import { buildValidationRules } from "../utils/validationHelpers";

function RadioComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: RadioChangeEvent) => {
    const value = e.target.value;
    dispatch(dynamicFormSaveData.actions.radioDataInsert(value));
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
