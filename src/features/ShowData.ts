import type { RootState } from "../app/store";
import { useSelector } from 'react-redux';

function ShowData() {
  const sum = useSelector((state: RootState) => ({
    radio: state.dynamicFormSaveData.Radio,
    email: state.dynamicFormSaveData.Email,
  }));
  console.log("Show Data: ", sum);
}

export default ShowData;