import axios from "axios";

const { REACT_APP_AERODATABOX_APIKEY } = process.env;


export default {
    // Export an object with a "search" method that searches the Giphy API for the passed query
    getFlightData : function(flightNum, airlineCode, flightDate) {
        // var apiUrl = "https://aerodatabox.p.rapidapi.com/flights/number/AA1095/2021-06-30";
        var apiUrl = "https://aerodatabox.p.rapidapi.com/flights/number/";
        apiUrl +=   airlineCode + flightNum + "/" + flightDate;      
        // console.log("I'm in getFlightData");
        // console.log(apiUrl);
        // console.log("api key = " + "68bb1886ebmsh3de97aab81b7ea5p1ebdcajsn60ab354a1d41");

        return axios.get(apiUrl, {
        headers: {'x-rapidapi-key' : "97500c194fmsh9856d08c53dc17fp15f399jsn23de4a6fddd8",
                    "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                }
        })
    }
}
