import type { FieldsType } from "../features/Home";
import { Form, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";

function NumberComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: number | null) => {

    switch (field.id) {
      case "age":
        if(value)
          dispatch(dynamicFormSaveData.actions.ageTypeDataInsert(value));
        break;
      default:
        break;
    }
  };
  const rulesArr: any[] = [];
  switch (field.id) {
    case "age":
      rulesArr.push(
        { required: true, message: "Age is required" },
        {
          type: "number",
          min: 18,
          message: "You must be at least 18 years old",
        },
        { type: "number", max: 100, message: "Please enter a valid age" }
      );
      break;
    default:
      break;
  }
  return (
    <>
      <Form.Item name={["user", field.id]} label={field.label} rules={rulesArr}>
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
