import { CrudFilters } from "@refinedev/core";
import { mapOperator } from "./mapOperator";

export const generateFilter = (filters?: CrudFilters) => {
  const queryFilters: { [key: string]: string } = {};

  if (filters) {
    filters.map((filter) => {
      if (filter.operator === "or" || filter.operator === "and") {
        throw new Error(
          `[@refinedev/json-api]: \`operator: ${filter.operator}\` is not supported. You can create custom data provider. https://refine.dev/docs/api-reference/core/providers/data-provider/#creating-a-data-provider`
        );
      }

      if ("field" in filter) {
        const { field, operator, value } = filter;

        const mappedOperator = mapOperator(operator);
        queryFilters[`filter[${field}][${mappedOperator}]`] = value;
      }
    });
  }

  return queryFilters;
};
