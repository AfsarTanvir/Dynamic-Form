import { useState } from "react";
import type { FieldsType } from "../features/Home";

function EmailComponent({
  field,
  triggerValidation,
}: {
  field: FieldsType;
  triggerValidation: boolean;
}) {
  const [emailField, setEmailField] = useState<string>("");

  function handleSubmit(){
    
  }
  if (triggerValidation) 
    handleSubmit();

  return (
    <div>
      <label
        htmlFor={field.type}
        className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
      >
        {field.name}
      </label>
      <div className="mt-2">
        <input
          id={field.id}
          value={emailField}
          type={field.type}
          onChange={(e) => setEmailField(e.target.value)}
          placeholder={field.placeholder}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
        />
      </div>
    </div>
  );
}

export default EmailComponent;
