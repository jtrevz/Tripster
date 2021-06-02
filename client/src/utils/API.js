import axios from "axios";

export default {
  // Gets all airlines
  getAirlines: function() {
    console.log("I'm in API.js.getAirlines")
    return axios.get("/api/airlines");
  },
  // Gets the airline with the given id
  getAirline: function(id) {
    return axios.get("/api/airlines/" + id);
  }, 
   // Gets all trips for a given user
   // ------> This needs work <------
  getTrips: function(userData) {
    return axios.get("/api/trips"+userData);
  },
  // Gets the trip with the given id
  getTrip: function(id) {
    return axios.get("/api/trips/" + id);
  },
  // Deletes the trip with the given id
  deleteTrip: function(id) {
    return axios.delete("/api/trips/" + id);
  },
  // Saves a trip to the database
  saveTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  },
    // Saves a book to the database
  updateTrip: function(tripData) {
      return axios.put("/api/trips", tripData);
  }
};
