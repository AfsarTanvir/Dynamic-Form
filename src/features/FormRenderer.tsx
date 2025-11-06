import { useEffect, useMemo, useState } from "react";
import Fields from "../dynamicFields/Fields";
import ShowData from "./ShowData";
import { Button, Form } from "antd";
import type { DataType } from "./Home";

const FormRenderer: React.FC = () => {
  const [myData, setMyData] = useState<DataType | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    fetch(`data.json`)
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, []);

  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  const initialValues = useMemo(() => {
    if (!myData) return {};
    const defaults: Record<string, any> = {};
    myData.fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        defaults[field.name] = field.defaultValue;
      }
    });
    return defaults;
  }, [myData]);

//   ShowData();

  return (
    <>
      {myData && (
        <Form
          className="card"
          form={form}
          name={myData.formId}
          layout="vertical"
          initialValues={initialValues}
          onFinish={handleSubmit}
        >
          <h2>{myData.title}</h2>
          <h3>{myData.formId}</h3>
          {myData.fields.map((field) => (
            <Fields key={field.id} field={field} triggerValidation={false} />
          ))}

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      )}
    </>
  );
};

export default FormRenderer;
