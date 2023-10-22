import axios from "axios";
import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("getOne", () => {
  it("correct response", async () => {
    const response = await JsonServer(
      "https://api.fake-json-api.refine.dev:443",
      axios
    ).getOne({ resource: "posts", id: "1" });

    const { data } = response.data;

    expect(data.id).toBe(1);
    expect(data.attributes.title).toBe(
      "Deleniti et quasi architecto hic quam et tempora vero quo."
    );
  });
});
