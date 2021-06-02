const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TripSchema = new Schema({
    tripName: {
        type: String,
        trim: true,
        required: true
      },
    destination: {
        type: String,
        trim: true,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    userEmail: {              //this is the _id of the user
        type: String,
        required: false
    },
    departureFlightNumber: {
        type: String,
        trim: true
    },
    returnFlightNumber: {
        type: String,
        trim: true
    },
    airlineCode: {
        type: String,
        trim: true,
        required: false
    },
    events: [{
        eventName: {
            type: String,
            trim: true,
            required: false
        },
        eventDate: {
            type: Date,
            trim: true,
            required: false
        },
        location: {
            type: String,
            required: false
        },
        notes: {
            type: String,
            required: false
        }
    }],
    packingList: [{
        itemName: {
            type: String,
            required: false
        },
        packedDepartureTrip: Boolean,
        packedReturnTrip: Boolean
    }]
});


const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;