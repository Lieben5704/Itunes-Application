let request = require("supertest");
let { expect } = require("chai");
let express = require("express");
let helmet = require("helmet");
let app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

describe("Helmet middleware", () => {
  it("sets the X-Content-Type-Options header", async () => {
    let response = await request(app).get("/");
    expect(response.headers["x-content-type-options"]).to.equal("nosniff");
  });
});
