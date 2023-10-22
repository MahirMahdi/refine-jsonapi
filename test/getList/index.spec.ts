import axios from "axios";
import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("getList", () => {
  it("correct response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).getList({ resource: "posts" });

    const { data } = response.data[0];

    expect(data[0].id).toBe(1);
    expect(data[0].attributes.title).toBe(
      "Mollitia ipsam nisi in porro velit asperiores et quaerat dolorem."
    );
    expect(response.total).toBe(1000);
  });

  it("correct sorting response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).getList({
      resource: "posts",
      sorters: [
        {
          field: "id",
          order: "asc",
        },
      ],
    });

    const { data } = response.data[0];

    expect(data[0].id).toBe(1);
    expect(data[0].attributes.title).toBe(
      "Mollitia ipsam nisi in porro velit asperiores et quaerat dolorem."
    );
    expect(response.total).toBe(1000);
  });

  it("correct filter response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).getList({
      resource: "posts",
      filters: [
        {
          field: "category.id",
          operator: "eq",
          value: ["1"],
        },
      ],
    });

    const { data } = response.data[0];

    expect(data[0].attributes.category.id).toBe(1);
    expect(response.total).toBe(17);
  });

  it("correct filter and sort response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).getList({
      resource: "posts",
      filters: [
        {
          field: "category.id",
          operator: "eq",
          value: ["1"],
        },
      ],
      sorters: [
        {
          field: "id",
          order: "asc",
        },
      ],
    });

    const { data } = response.data[0];

    expect(data[0].id).toBe(44);
    expect(response.total).toBe(17);
  });
});
