let request = require("supertest");
let app = require("../app");
let { expect } = require("chai");

describe("GET /api/search", () => {
  it("should respond with JSON data", async () => {
    let response = await request(app).get("/api/search?term=Adele&entity=musicTrack");

    expect(response.status).to.equal(200);
    expect(response.headers["content-type"]).to.match(/json/);
    expect(response.body).to.exist;
  });

  it("should respond with correct search results", async () => {
    let response = await request(app).get("/api/search?term=Adele&entity=musicTrack");
  
    expect(response.status).to.equal(200);
    expect(response.body.resultCount).to.be.greaterThan(0);
    expect(response.body.results[0].artistName).to.equal("Adele");
    expect(response.body.results[0].trackName).to.equal("Skyfall");
  });
  
});
