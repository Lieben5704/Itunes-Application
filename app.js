let express = require('express');
let helmet = require('helmet');
let axios = require("axios");
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);

let app = express();

//This line of code sets the X-Frame-Options header to SAMEORIGIN using the frameguard middleware from the helmet library. 
//This header prevents clickjacking attacks by ensuring that the website can only be embedded in frames on pages from the same origin.
app.use(helmet.frameguard({ action: "sameorigin" }));

//The directives object sets the allowed sources for certain types of content. 
//In this case, the defaultSrc directive only allows resources to be loaded from the same origin, and the scriptSrc directive allows resources to be 
//loaded from the same origin as well as inline scripts with the 'unsafe-inline' keyword.
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
  })
);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*',(req,res)=> {res.sendFile(path.resolve(__dirname,
  'frontend', 'build','index.html'));
  });
  }
  

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

// export the app instance for testing purposes
module.exports = app;
