const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AirlineSchema = new Schema({      // there are two codes used to identify airlines,
    airlineName: {                      // IATA and ICAO.  I think it makes sense to use 
        type: String,                   // only one.  Arbitrarily choosing IATA codes.
        trim: true,                     // We can switch to the ICAO if we run into trouble
        required: true                  // with IATA
      },                                // Codes can be found here:
    airlineCode: {                      // https://www.iata.org/en/publications/directories/code-search/
        type: String,
        trim: true,
        required: true
    }
});


const Airline = mongoose.model("Airline", AirlineSchema);

module.exports = Airline;