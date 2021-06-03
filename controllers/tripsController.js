const db = require("../models");

// Defining methods for the tripsController
module.exports = {

  find: function(req, res) {
    db.Trip
      .find({userEmail: req.params.id})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(411).json(err)
      });
  },
  findById: function(req, res) {
    db.Trip
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Trip
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Trip
      .update({ _id: req.params.id }, 
        {$push: {events:req.body}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Trip
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
