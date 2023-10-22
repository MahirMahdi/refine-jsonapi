import axios from "axios";
import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("update", () => {
  it("correct response", async () => {
    const response = await JsonServer(
      "https://api.fake-rest.refine.dev",
      axios
    ).update({
      resource: "posts",
      id: "1000",
      variables: {
        type: "posts",
        id: 1001,
        attributes: {
          title: "foo",
          content: "bar",
        },
      },
    });

    const { data } = response;

    expect(data.id).toBe(1000);
    expect(data.attributes.title).toBe("foo");
    expect(data.attributes.content).toBe("bar");
  });
});
