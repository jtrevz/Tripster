const db = require("../models");

// Defining methods for the airlinesController
module.exports = {
  findAll: function(req, res) {
    db.Airline
      .find(req.query)
      .sort({ airlineName: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Airline
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};