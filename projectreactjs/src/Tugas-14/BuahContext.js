import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [daftarHargaBuah, setDaftarHargaBuah] = useState (null);
    
    useEffect(
        () => {
            if (daftarHargaBuah === null){
                axios.get('http://backendexample.sanbercloud.com/api/fruits')
                .then(
                    res => {
                        let databuah = res.data
                        setDaftarHargaBuah(
                            databuah.map(
                                el => {
                                    return {id: el.id, name: el.name, price: el.price, weight: el.weight}
                                }
                            )
                        )
                    }
                )
            }
        },[daftarHargaBuah]
    )

    return(
        <BuahContext.Provider value={[daftarHargaBuah, setDaftarHargaBuah]}>
            {props.children}
        </BuahContext.Provider>
    )
}

export default BuahProvider