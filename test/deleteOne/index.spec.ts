import axios from "axios";
import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("deleteOne", () => {
  it("correct response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).deleteOne({ resource: "posts", id: "1" });

    const { data } = response;

    expect(data).toEqual({});
  });
});
