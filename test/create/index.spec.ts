import axios from "axios";
import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("create", () => {
  it("correct response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).create({
      resource: "posts",
      variables: {
        type: "posts",
        id: 1001,
        attributes: {
          title: "foo",
          content: "bar",
        },
      },
    });

    const { data } = response.data;

    expect(data.id).toBe("1001");
    expect(data.attributes.title).toBe("foo");
    expect(data.attributes.content).toBe("bar");
  });
});
