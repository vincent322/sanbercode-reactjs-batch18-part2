import React, { useState, createContext } from "react";

export const InputContext = createContext();

export const InputProvider = props => {
    const [inputForm, setInputForm] = useState ({id: null, name: "", price: "", weight: 0})

    return(
        <InputContext.Provider value={[inputForm, setInputForm]}>
            {props.children}
        </InputContext.Provider>
    )
}
