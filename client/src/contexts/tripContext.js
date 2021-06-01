import React from 'react';

const TripContext = React.createContext({
    currentTrip: {},
    userTrips:{},
    handleSubmit: () => {}
})

export default TripContext