import { useState, type ChangeEvent } from "react";
import type { FieldsType } from "../features/Home";

function RadioComponent({ field }: { field: FieldsType }) {
  const [radioField, setRadioField] = useState(field.defaultValue ?? null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRadioField(event.target.value);
    setError(null);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!radioField) {
      const v =
        field.validations && field.validations.length > 0
          ? field.validations[0]
          : {
              rule: "option",
              message: "Please select an option",
            };

      setError(v.message);
      return;
    }

    alert(`Your favorite option is: ${radioField}`);
  };

  return (
    <>
      <p>{field.label}</p>
      {field.options?.map((op, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={field.name}
              value={op.value}
              checked={radioField === op.value}
              onChange={handleChange}
            />
            {op.label}
          </label>
        </div>
      ))}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default RadioComponent;
