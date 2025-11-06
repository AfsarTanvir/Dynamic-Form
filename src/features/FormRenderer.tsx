import { useMemo } from "react";
import Fields from "../dynamicFields/Fields";
import { Button, Form } from "antd";
import { useFetchData } from "../shared/hooks/useFetchData";
import useSaveInitialData from "../shared/hooks/useSaveInitialData";
import { resetReducer } from "../dynamicFields/hook/useSaveDataReducer";
import { useDependencyWatcher } from "../dynamicFields/hook/useDependencyWatcher";

const FormRenderer: React.FC = () => {
  const [form] = Form.useForm();

  const myData = useFetchData();
  useSaveInitialData(myData);
  useDependencyWatcher(myData?.fields ?? [], form);

  const resetAll = () => {
    form.resetFields();
    resetReducer();
  };

  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    resetAll();
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

          <Button style={{ margin: "2px" }} type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={resetAll}>
            Reset
          </Button>
        </Form>
      )}
    </>
  );
};

export default FormRenderer;
