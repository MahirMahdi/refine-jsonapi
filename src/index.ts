import { DataProvider } from "@refinedev/core";
import { AxiosInstance } from "axios";
import { stringify } from "query-string";
import { axiosInstance, generateFilter, generateSort } from "./utils";

type MethodTypes = "get" | "delete" | "head" | "options";
type MethodTypesWithBody = "post" | "put" | "patch";

const dataProvider = (
  apiUrl: string,
  httpClient: AxiosInstance = axiosInstance
): Omit<
  Required<DataProvider>,
  "createMany" | "updateMany" | "deleteMany"
> => ({
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const url = `${apiUrl}/${resource}`;

    const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {};

    const { headers: headersFromMeta, method } = meta ?? {};
    const requestMethod = (method as MethodTypes) ?? "get";

    const queryFilters = generateFilter(filters);

    const query: {
      "page[number]"?: number;
      "page[size]"?: number;
      sort?: string;
    } = {};

    if (mode === "server") {
      query["page[number]"] = (current - 1) * pageSize;
      query["page[size]"] = current * pageSize;
    }

    const generatedSort = generateSort(sorters);
    if (generatedSort) {
      const { _sort } = generatedSort;
      query.sort = _sort.join(",");
    }

    const stringifiedQuery = stringify(query, { encode: false });
    const stringifiedQueryFilters = stringify(queryFilters, {
      encode: false,
    });

    const { data, headers } = await httpClient[requestMethod](
      `${url}?${stringifiedQuery}&${stringifiedQueryFilters}`,
      {
        headers: headersFromMeta,
      }
    );

    const total = +headers["x-total-count"];

    return {
      data,
      total: total || data.length,
    };
  },

  getMany: async ({ resource, ids, meta }) => {
    const { headers, method } = meta ?? {};
    const requestMethod = (method as MethodTypes) ?? "get";

    const stringifiedQueryFilter = stringify(
      {
        "filter[id]": ids.join(","),
      },
      { encode: false }
    );

    const { data } = await httpClient[requestMethod](
      `${apiUrl}/${resource}?${stringifiedQueryFilter}`,
      { headers }
    );

    return {
      data,
    };
  },

  create: async ({ resource, variables, meta }) => {
    const url = `${apiUrl}/${resource}`;

    const { headers, method } = meta ?? {};
    const requestMethod = (method as MethodTypesWithBody) ?? "post";

    const { data } = await httpClient[requestMethod](url, variables, {
      headers,
    });

    return {
      data,
    };
  },

  update: async ({ resource, id, variables, meta }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { headers, method } = meta ?? {};
    const requestMethod = (method as MethodTypesWithBody) ?? "patch";

    const { data } = await httpClient[requestMethod](url, variables, {
      headers,
    });

    return {
      data,
    };
  },

  getOne: async ({ resource, id, meta }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { headers, method } = meta ?? {};
    const requestMethod = (method as MethodTypes) ?? "get";

    const { data } = await httpClient[requestMethod](url, { headers });

    return {
      data,
    };
  },

  deleteOne: async ({ resource, id, variables, meta }) => {
    const url = `${apiUrl}/${resource}/${id}`;

    const { headers, method } = meta ?? {};
    const requestMethod = (method as MethodTypesWithBody) ?? "delete";

    const { data } = await httpClient[requestMethod](url, {
      data: variables,
      headers,
    });

    return {
      data,
    };
  },

  getApiUrl: () => {
    return apiUrl;
  },

  custom: async ({
    url,
    method,
    filters,
    sorters,
    payload,
    query,
    headers,
  }) => {
    let requestUrl = `${url}?`;

    if (sorters) {
      const generatedSort = generateSort(sorters);
      if (generatedSort) {
        const { _sort } = generatedSort;
        const sortQuery = {
          sort: _sort.join(","),
        };
        requestUrl = `${requestUrl}&${stringify(sortQuery, {
          encode: false,
        })}`;
      }
    }

    if (filters) {
      const filterQuery = generateFilter(filters);
      requestUrl = `${requestUrl}&${stringify(filterQuery, {
        encode: false,
      })}`;
    }

    if (query) {
      requestUrl = `${requestUrl}&${stringify(query, { encode: false })}`;
    }

    let axiosResponse;
    switch (method) {
      case "put":
      case "post":
      case "patch":
        axiosResponse = await httpClient[method](url, payload, {
          headers,
        });
        break;
      case "delete":
        axiosResponse = await httpClient.delete(url, {
          data: payload,
          headers: headers,
        });
        break;
      default:
        axiosResponse = await httpClient.get(requestUrl, {
          headers,
        });
        break;
    }

    const { data } = axiosResponse;

    return Promise.resolve({ data });
  },
});

export default dataProvider;
export * from "./utils";
