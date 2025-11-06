import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { dynamicFormSaveData } from "../../features/reduxData/dynamicFormSaveData";
import { useForm } from "antd/es/form/Form";

export function useSaveDataReducer() {
  const dispatch = useDispatch<AppDispatch>();

  return (keyType: any, value: any) => {
    dispatch(
      dynamicFormSaveData.actions.updateField({
        key: keyType,
        value,
      })
    );
  };
}

export function resetReducer() {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(dynamicFormSaveData.actions.resetForm());
}

export function resetSingle(key: string) {
  // const [form] = useForm();
  // console.log("key : ", key, Object.keys(form.getFieldsValue()));
  // form.resetFields([key]);
  // const dispatch = useDispatch<AppDispatch>();
  // dispatch(
  //   dynamicFormSaveData.actions.updateField({
  //     key: key,
  //     value: "",
  //   })
  // );
}
