import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App", () => {
  it("should render correctly", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                trackId: 1,
                artworkUrl100: "https://via.placeholder.com/100",
                trackName: "Track 1",
                artistName: "Artist 1",
              }
            ],
          }),
      })
    );
    let tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
