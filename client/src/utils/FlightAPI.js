import axios from "axios";


export default {
    // Export an object with a "search" method that searches the Giphy API for the passed query
    getFlightData : function(flightNum, airlineCode, flightDate) {
        // var apiUrl = "https://aerodatabox.p.rapidapi.com/flights/number/AA1095/2021-06-30";
        var apiUrl = "https://aerodatabox.p.rapidapi.com/flights/number/";
        apiUrl +=   airlineCode + flightNum + "/" + flightDate;      
        console.log("I'm in getFlightData");
        console.log(apiUrl);

        return axios.get(apiUrl, {
        headers: {'x-rapidapi-key' : '862e3c95cemshd7b782fd1afee99p1cc2dajsn7749c4a6cd09',
                    "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                }
        })
    }
}
