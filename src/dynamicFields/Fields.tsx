import CheckboxComponent from './CheckboxComponent';
import EmailComponent from './EmailComponent';
import NumberComponent from './NumberComponent';
import PasswordComponent from './PasswordComponent';
import RadioComponent from './RadioComponent';
import SelectComponent from './SelectComponent';
import TextareaComponent from './TextareaComponent';
import TextComponent from './TextComponent';
import type { FieldsType } from '../features/Home';
import { useState } from 'react';

const componentMap: Record<string, React.FC<any> | undefined> = {
  radio: RadioComponent,
  email: EmailComponent,
  password: PasswordComponent,
  text: TextComponent,
  checkbox: CheckboxComponent,
  number: NumberComponent,
  select: SelectComponent,
  textarea: TextareaComponent,
};

function Fields({
  field,
  triggerValidation,
}: {
  field: FieldsType;
  triggerValidation: boolean;
}) {
  const Component = componentMap[field.type];

  return (
    <div>
      {Component ? (
        <Component field={field} triggerValidation={triggerValidation} />
      ) : (
        <p>Unsupported field type: {field.type}</p>
      )}
    </div>
  );
}

export default Fields;
