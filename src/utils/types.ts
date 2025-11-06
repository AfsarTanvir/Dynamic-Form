export type AllDataType = {
  userType: string;
  email: string;
  password: string;
  country: string;

  companyName?: string;
  taxId?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  specialOffers?: boolean;
  offerType?: string;
  adminCode?: string;
  age?: number;
  comments?: string;
  [key: string]: string | number | boolean | undefined;
};

export type DataType = {
  formId: string;
  title: string;
  fields: FieldsType[];
};
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
