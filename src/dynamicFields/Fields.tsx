import CheckboxComponent from "./CheckboxComponent";
import EmailComponent from "./EmailComponent";
import NumberComponent from "./NumberComponent";
import PasswordComponent from "./PasswordComponent";
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import TextareaComponent from "./TextareaComponent";
import TextComponent from "./TextComponent";
import { isShowAble } from "./shared/isShowAble";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import type { FieldsType } from "../utils/types";
import { useMemo } from "react";

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

  const formData = useSelector((state: RootState) => state.dynamicFormSaveData);
  const flag = useMemo(() => {
    return isShowAble(field.dependsOn, field.condition, formData);
  }, [formData, field.dependsOn, field.condition]);

  return (
    <div>
      {Component && flag && (
        <Component field={field} triggerValidation={triggerValidation} />
      )}
    </div>
  );
}

export default Fields;
