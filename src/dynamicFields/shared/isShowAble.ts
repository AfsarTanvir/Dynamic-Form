import type { AllDataType, ConditionType } from "../../utils/types";

function compareValues(operation: string, a: any, b: any): boolean {
  switch (operation) {
    case "==":
      return a == b;
    case "===":
      return a === b;
    case "!=":
      return a != b;
    case "!==":
      return a !== b;
    case ">":
      return a > b;
    case "<":
      return a < b;
    case ">=":
      return a >= b;
    case "<=":
      return a <= b;
    case "includes":
      return typeof a === "string" && a.includes(b);
    case "in":
      return Array.isArray(b) && b.includes(a);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

export function isShowAble(
  dependsOn: string | undefined,
  conditions: ConditionType | undefined,
  formData: AllDataType
): boolean {
  if (!conditions) return true;

  let key: string | undefined;
  
  if (dependsOn) {
    const depData = formData[dependsOn];
    if (!depData) return false;
  }
  key = conditions.field.replace(/{{|}}/g, "");

  if (!key) return false;

  const value = formData[key];
  if (!value) return false;
  return compareValues(conditions.operator, value, conditions.value);
}
