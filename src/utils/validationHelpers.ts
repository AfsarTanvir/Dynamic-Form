import type { ValidationType } from "../features/Home";

export interface ValidationRule {
  required?: boolean;
  message?: string;
  type?: "email" | "number" | "string";
  min?: number;
  max?: number;
}

export function buildValidationRules(
  validations: ValidationType[]
): ValidationRule[] {
  if (!validations || validations.length === 0) return [];

  return validations.map((val) => {
    switch (val.rule) {
      case "required":
        return { required: true, message: val.message };
      case "email":
        return { type: "email", message: val.message };
      case "minLength":
        return { type: "string", min: val.value, message: val.message };
      case "maxLength":
        return { type: "string", max: val.value, message: val.message };
      case "min":
        return { type: "number", min: val.value, message: val.message };
      case "max":
        return { type: "number", max: val.value, message: val.message };
      case "pattern": {
        const pattern =
          typeof val.value === "string" ? new RegExp(val.value) : val.value;
        return { pattern, message: val.message };
      }
      default:
        return { message: val.message };
    }
  });
}
