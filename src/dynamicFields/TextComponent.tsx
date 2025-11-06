import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { FieldsType } from "../features/Home";
import type { AppDispatch, RootState } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";
import { buildValidationRules } from "../utils/validationHelpers";

function TextComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  if (field.condition) {
    const con = field.condition;
    const data = useSelector(
      (state: RootState) => state.dynamicFormSaveData.Radio
    );
    if (con.operator === "===") {
      if (con.value !== data) {
        return;
      }
    } else {
      if (con.value === data) {
        return;
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    switch (field.id) {
      case "companyName":
        dispatch(dynamicFormSaveData.actions.companyNameDataInsert(value));
        break;
      case "taxId":
        dispatch(dynamicFormSaveData.actions.textDataInsert(value));
        break;
      case "city":
        dispatch(dynamicFormSaveData.actions.cityDataInsert(value));
        break;
      case "state":
        dispatch(dynamicFormSaveData.actions.stateDataInsert(value));
        break;
      case "zipCode":
        dispatch(dynamicFormSaveData.actions.zipCodeDataInsert(value));
        break;
      case "adminCode":
        dispatch(dynamicFormSaveData.actions.adminCodeDataInsert(value));
        break;
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
          type="text"
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </Form.Item>
    </>
  );
}

export default TextComponent;
