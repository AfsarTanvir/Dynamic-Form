import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import type { FieldsType } from "../features/Home";
import type { AppDispatch, RootState } from "../app/store";
import { dynamicFormSaveData } from "../features/reduxData/dynamicFormSaveData";

function TextComponent({ field }: { field: FieldsType }) {
  const dispatch = useDispatch<AppDispatch>();

  if(field.condition){
    const con = field.condition;
    const data = useSelector(
      (state: RootState) => state.dynamicFormSaveData.Radio
    );
    if (con.operator === "===") {
      if (con.value !== data) {
        return;
      }
    }else{
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

  const rulesArr: any[] = [];
  switch (field.id) {
    case "companyName":
      rulesArr.push({
        required: true,
        message: "Company name is required for business accounts",
      });
      break;
    case "taxId":
      rulesArr.push({
        required: true,
        message: "Company name is required for business accounts",
      });
      break;
    case "city":
      rulesArr.push({
        required: true,
        message: "Please select a city",
      });
      break;
    case "state":
      rulesArr.push({
        required: true,
        message: "Please select a state",
      });
      break;
    case "zipCode":
      rulesArr.push({
        required: true,
        message:  "Zip code is required",
      });
      rulesArr.push({
        pattern: "^[0-9]{5}$",
        message: "Zip code must be 5 digits",
      });
      break;
    case "adminCode":
      rulesArr.push({
        required: true,
        message: "Any namdmin code is required for admin email",
      });
      rulesArr.push({
        min: 6,
        message: "Admin code must be at least 6 characters",
      });
      break;
    case "comments":
      rulesArr.push({
        max: 500,
        message: "Company name is required for business accounts",
      });
      break;
    default:
      break;
  }

  return (
    <>
      <Form.Item name={["user", field.id]} label={field.label} rules={rulesArr}>
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
