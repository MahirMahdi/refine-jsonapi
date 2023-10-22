import axios from "axios";
import JsonServer from "../../src/index";
import "./index.mock";

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("custom", () => {
  const API_URL = "https://api.fake-json-api.refine.dev:443";

  it("correct get response", async () => {
    const response = await JsonServer(API_URL, axios).custom!({
      url: `${API_URL}/users`,
      method: "get",
    });

    expect(response.data.data[0].id).toBe(1);
    expect(response.data.data[0].attributes.email).toBe(
      "tiana_gleason63@hotmail.com"
    );
  });

  it("correct filter response", async () => {
    const response = await JsonServer(API_URL, axios).custom!({
      url: `${API_URL}/users`,
      method: "get",
      filters: [
        {
          field: "email",
          operator: "eq",
          value: "tiana_gleason63@hotmail.com",
        },
      ],
    });

    expect(response.data.data[0].id).toBe(1);
    expect(response.data.data[0].attributes.email).toBe(
      "tiana_gleason63@hotmail.com"
    );
  });

  it("correct sort response", async () => {
    const response = await JsonServer(API_URL, axios).custom!({
      url: `${API_URL}/users`,
      method: "get",
      sorters: [
        {
          field: "id",
          order: "asc",
        },
      ],
    });

    expect(response.data.data[0].id).toBe(1);
  });

  it("correct post request", async () => {
    const response = await JsonServer(API_URL, axios).custom!({
      url: `${API_URL}/users`,
      method: "post",
      payload: {
        type: "users",
        attributes: {
          firstName: "test",
          lastName: "test",
          email: "test@mail.com",
          status: true,
        },
      },
    });

    expect(response.data.data).toEqual({
      type: "users",
      id: 51,
      attributes: {
        firstName: "test",
        lastName: "test",
        email: "test@mail.com",
        status: true,
      },
    });
  });
});
