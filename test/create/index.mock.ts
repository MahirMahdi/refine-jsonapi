import nock from "nock";

nock("https://api.fake-json-api.refine.dev:443", { encodedQueryParams: true })
  .post("/posts", {
    type: "posts",
    id: 1001,
    attributes: {
      title: "foo",
      content: "bar",
    },
  })
  .reply(
    201,
    {
      data: {
        type: "posts",
        id: "1001",
        attributes: {
          title: "foo",
          content: "bar",
        },
      },
    },
    [
      "Server",
      "nginx/1.17.10",
      "Date",
      "Sun, 08 Oct 2023 11:33:00 GMT",
      "Content-Type",
      "application/vnd.api+json",
      "Content-Length",
      "54",
      "Connection",
      "close",
      "X-Powered-By",
      "Express",
      "Vary",
      "Origin, X-HTTP-Method-Override, Accept-Encoding",
      "Access-Control-Allow-Credentials",
      "true",
      "Cache-Control",
      "no-cache",
      "Pragma",
      "no-cache",
      "Expires",
      "-1",
      "Access-Control-Expose-Headers",
      "Location",
      "Location",
      "http://api.fake-json-api.refine.dev/posts/1001",
      "X-Content-Type-Options",
      "nosniff",
      "ETag",
      'W/"36-aUpCEyKGcTsfoD+czkB83vdqSGs"',
    ]
  );
