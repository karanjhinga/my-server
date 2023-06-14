// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

app.use(bodyParser.json());

// Define a route
app.get("/v1/pois/low-demand", (req, res) => {
  res.send({
    success: false,
  });
});

app.get("/cherry/no-order-check/:driverId", (req, res) => {
  res.send({
    success: true,
    data: {
      message: "none",
    },
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
