import { configureStore } from "@reduxjs/toolkit";
import dynamicFormReducer from "../features/reduxData/dynamicFormSaveData";
export const store = configureStore({
  reducer: {
    dynamicFormSaveData: dynamicFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
