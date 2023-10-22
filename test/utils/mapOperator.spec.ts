import { CrudOperators } from "@refinedev/core";
import { mapOperator } from "../../src/utils";

describe("mapOperator", () => {
  it("should return correct mapping for given operator", () => {
    const operatorMappings: Record<CrudOperators, string> = {
      ne: "ne",
      gte: "gte",
      lte: "lte",
      contains: "like",
      eq: "eq",
      and: "",
      between: "",
      containss: "",
      endswith: "",
      endswiths: "",
      gt: "gt",
      in: "in",
      lt: "lt",
      ncontains: "",
      ncontainss: "",
      nendswith: "",
      nendswiths: "",
      nnull: "nnull",
      nin: "nin",
      nbetween: "",
      nstartswith: "",
      nstartswiths: "",
      null: "null",
      or: "",
      startswith: "",
      startswiths: "",
    };

    for (const operator in operatorMappings) {
      const expectedResult = operatorMappings[operator as CrudOperators];
      expect(mapOperator(operator as CrudOperators)).toEqual(expectedResult);
    }
  });

  it.each(["unsupported", "", undefined, null])(
    "should return empty string for %s operator ",
    (operator) => {
      expect(mapOperator(operator as CrudOperators)).toEqual("");
    }
  );
});
