import React, {useState, useContext} from "react";
import { useAuth } from '../../contexts/authContext'

const TripContext = React.createContext()

export function useTrip() {
    return useContext(TripContext)
}

export function ModalProvider ({children}) {
    const[currentUser] = useAuth();
    const[currentTrip, setCurrentTrip] = useState()
    const[tripObject, setTripObject] = useState({})
    
   
}