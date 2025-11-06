import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AllDataType } from "../../utils/types";

const initialState: AllDataType = {
  userType: "",
  email: "",
  password: "",
  country: "",
};

export const dynamicFormSaveData = createSlice({
  name: "dynamicFormSaveData",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ key: keyof AllDataType; value: AllDataType[keyof AllDataType] }>
    ) => {
      const { key, value } = action.payload;
      (state as any)[key] = value;
    },
    resetForm: () => initialState,
  },
});

export default dynamicFormSaveData.reducer;
