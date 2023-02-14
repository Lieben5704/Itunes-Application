// import required modules
let express = require("express");
let axios = require("axios");
let app = express();

// import and use helmet middleware for secure headers
let helmet = require("helmet");
app.use(helmet());

// set the port number as per the environment variable or default to 5000
let port = process.env.PORT || 5000;

// define an API endpoint for search
app.get("/api/search", async (req, res) => {
  let { term, entity } = req.query;

  // make a GET request to the iTunes API using axios
  let result = await axios.get(
    `https://itunes.apple.com/search?term=${term}&entity=${entity}`
  );

  // return the response data from iTunes API to the client
  res.send(result.data);
});

// start the server and log the port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// export the app instance for testing purposes
module.exports = app;
