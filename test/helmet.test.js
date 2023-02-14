const request = require("supertest");
const { expect } = require("chai");
const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

describe("Helmet middleware", () => {
  it("sets the X-Content-Type-Options header", async () => {
    const response = await request(app).get("/");
    expect(response.headers["x-content-type-options"]).to.equal("nosniff");
  });
});
