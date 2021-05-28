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
    userKey: {
        type: Number,
        required: true
    },
    departureFlightNumber: {
        type: String,
        required: false
    },
    returnFlightNumber: {
        type: String,
        required: false
    },
    airlineCode: {
        type: Number,
        required: false
    },
    events: [{
        eventName: {
            type: String,
            required: true
        },
        eventDate: {
            type: Date,
            required: true
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
            required: true
        },
        packedDepartureTrip: Boolean,
        packedReturnTrip: Boolean
    }]
});


const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;