import React, {useState, useContext} from "react";

const ModalContext = React.createContext()

export function useModal() {
    return useContext(ModalContext)
}


export function ModalProvider ({children}) {


const [openModal, setOpenModal] = useState(false)

  

}
