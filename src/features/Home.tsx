import { useEffect, useState } from "react";
import Fields from "../dynamicFields/Fields";

export type ValidationType = {
  rule: string;
  message: string;
  value?: number;
};

export type ConditionType = {
    field: string;
    operator: string;
    value: string;
}

export type OptionsType = {
    label: string;
    value: string;
}

export type FieldsType = {
  id: string;
  type: string;
  name: string;
  label: string;
  validations: ValidationType[];

  options?: OptionsType[];
  defaultValue?: string | boolean;
  placeholder?: string;
  condition?: ConditionType;
};

type DataType = {
  formId: string;
  title: string;
  fields: FieldsType[];
};

function Home() {
  const [myData, setMyData] = useState<DataType | null>(null);
  const [triggerValidation, setTriggerValidation] = useState(false);
  useEffect(() => {
    fetch(`data.json`)
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, []);

  const handleSubmit = () => {
    setTriggerValidation(true);
    setTimeout(() => setTriggerValidation(false), 3000);
  };

  return (
    <>
      <h1>Welcome</h1>
      {myData && (
        <>
          <div>{myData.formId}</div>
          <div>{myData.title}</div>
          <div>
            {myData.fields.map((f) => (
              <Fields
                key={f.id}
                field={f}
                triggerValidation={triggerValidation}
              />
            ))}
          </div>
        </>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Home;