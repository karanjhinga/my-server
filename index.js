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

app.get("/fuzzy_search", (req, res) => {
  const { q, size } = req.params;

  res.send([
    {
      title:
        "Chained booking cancellation by customer is not reflected on the driver app",
      subTeam: "Driver FulFilment Transport",
      issueType: "Chaining/Chained Booking",
      team: "Driver Platform",
    },
    {
      title: "Wallet linking had failed",
      subTeam: "Driver Benefits",
      issueType: "Swadaya",
      team: "Driver Platform",
    },
    {
      title: "Driver not able to see chained booking marker on map etc",
      subTeam: "Driver FulFilment Transport",
      issueType: "Transport Booking Flow issues on Driver App",
      team: "Driver Platform",
    },
    {
      title:
        "My driver is not showing as top driver in the customer booking page",
      subTeam: "Driver Quality",
      issueType: "DPS or Driver Performance Score",
      team: "Driver Platform",
    },
    {
      title:
        "Issues related to booking flow Including chained/back to back bookings, multi stop booking",
      subTeam: "Driver FulFilment Transport",
      issueType: "Transport Booking Flow issues on Driver App",
      team: "Driver Platform",
    },
  ]);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
