import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { FieldsType } from "../../utils/types";
import type { AppDispatch, RootState } from "../../app/store";
import { isShowAble } from "../shared/isShowAble";
import { dynamicFormSaveData } from "../../features/reduxData/dynamicFormSaveData";
import type { FormInstance } from "antd";

export function useDependencyWatcher(fields: FieldsType[], form: FormInstance<any>) {
  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.dynamicFormSaveData);

  useEffect(() => {
    fields.forEach((field) => {
      if (field.dependsOn && field.condition) {
        const visible = isShowAble(field.dependsOn, field.condition, formData);

        if (!visible && formData[field.id]) {
          // 1️⃣ Reset field from the AntD form cache
          form.setFieldsValue({ [field.id]: undefined });
          form.resetFields([field.id]);

          // 2️⃣ Clear from Redux
          dispatch(
            dynamicFormSaveData.actions.updateField({
              key: field.id,
              value: undefined,
            })
          );
        }

        // 3️⃣ Extra: prevent reusing old default when it becomes visible again
        if (visible && formData[field.id] === undefined) {
          form.setFieldsValue({ [field.id]: undefined });
        }
      }
    });
  }, [formData, fields, dispatch, form]);
}
