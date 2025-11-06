import { useEffect, useState } from "react";
import Fields from "../dynamicFields/Fields";
import ShowData from "./ShowData";
import { Form, type FormProps } from "antd";

export type ValidationType = {
  rule: string;
  message: string;
  value?: number;
};

export type ConditionType = {
  field: string;
  operator: string;
  value: string | boolean;
};

export type OptionsType = {
  label: string;
  value: string;
};

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
  dependsOn?: string;
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export type DataType = {
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

  ShowData();

  return (
    <>
      <h1>Welcome</h1>
      {myData && (
        <div className="card">
          <div>{myData.formId}</div>
          <div>{myData.title}</div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {myData.fields.map((f) => (
              <Fields
                key={f.id}
                field={f}
                triggerValidation={triggerValidation}
              />
            ))}
            <button onClick={handleSubmit}>Submit</button>
          </Form>
        </div>
      )}
    </>
  );
}

export default Home;
