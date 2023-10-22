import { CrudOperators } from "@refinedev/core";

export const mapOperator = (operator: CrudOperators): string => {
  switch (operator) {
    case "eq":
    case "ne":
    case "gt":
    case "lt":
    case "gte":
    case "lte":
    case "in":
    case "nin":
    case "null":
    case "nnull":
      return `${operator}`;
    case "contains":
      return "like";
    default:
      return "";
  }
};
