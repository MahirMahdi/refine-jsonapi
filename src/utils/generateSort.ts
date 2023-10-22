import { CrudSorting } from "@refinedev/core";

export const generateSort = (sorters?: CrudSorting) => {
  if (sorters && sorters.length > 0) {
    const _sort: string[] = [];

    sorters.map((item) => {
      if (item.order === "desc") {
        _sort.push(`-${item.field}`);
      } else {
        _sort.push(item.field);
      }
    });

    return {
      _sort,
    };
  }

  return;
};
