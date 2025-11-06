import { useEffect } from "react";
import { useSaveDataReducer } from "../../dynamicFields/hook/useSaveDataReducer";
import type { DataType } from "../../utils/types";

export default function useSaveInitialData(myData: DataType | null) {
  const saveData = useSaveDataReducer();
  useEffect(() => {
    if (!myData) return;
    myData.fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        saveData(field.id, field.defaultValue);
      }
    });
  }, []);
}
