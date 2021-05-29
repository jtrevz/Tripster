const mongoose = require("mongoose");
const db = require("../models");

// This file empties the airline collection and creates a new airline collection

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tripster");

const airlineSeed = [
  {
    airlineName: "American Airlines",
    airlineCode: "AA"
  },
  {
    airlineName: "Southwest Airlines",
    airlineCode: "WN"
  },
  {
    airlineName: "JetBlue Airlines",
    airlineCode: "B6"
  },
  {
    airlineName: "Delta Airlines",
    airlineCode: "DL"
  },
  {
    airlineName: "Frontier Airlines",
    airlineCode: "F9"
  },
  {
    airlineName: "Alaska Airlines",
    airlineCode: "AS"
  }
];

db.Airline.deleteMany({})
  .then(() => db.Airline.collection.insertMany(airlineSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
