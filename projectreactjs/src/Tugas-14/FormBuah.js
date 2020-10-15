import React, {useContext} from "react"
import {BuahContext} from './BuahContext'
import {InputContext} from './InputContext'
import axios from "axios";

const FormBuah = () => {
    const [daftarPriceBuah, setdaftarPriceBuah] = useContext(BuahContext)
    const [inputForm, setInputForm] = useContext(InputContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        let indexForm = inputForm.id
        let inputName = inputForm.name
        let inputPrice = inputForm.price
        let inputWeight = inputForm.weight
        if (indexForm === null){
            axios.post('http://backendexample.sanbercloud.com/api/fruits', {name: inputName, price: inputPrice, weight: inputWeight})
            .then(
                res => {
                    let data = res.data
                    setdaftarPriceBuah([...daftarPriceBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
                    setInputForm({id: null, name: "", price: "", weight: 0})
                }
            )
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${indexForm}`, {name: inputName, price: inputPrice, weight: inputWeight})
            .then(
                res => {
                    let dataBuah = daftarPriceBuah.map(
                        x => {
                            if (x.id === indexForm){
                                x.name = inputName
                                x.price = inputPrice
                                x.weight = inputWeight
                            }
                            return x
                        }
                    )
                    setdaftarPriceBuah(dataBuah)
                    setInputForm({id: null, name: "", price: "", weight: 0})
                }
            )
        }
    }

    const handleChangeName = (event) =>{
        setInputForm({...inputForm, name: event.target.value});
    }

    const handleChangeWeight = (event) =>{
        setInputForm({...inputForm, weight: event.target.value});
    }

    const handleChangePrice = (event) =>{
        setInputForm({...inputForm, price: event.target.value});
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Name </label><input type="text" onChange={handleChangeName} value={inputForm.name} required/>
            <label> Price </label><input type="text" onChange={handleChangePrice} value={inputForm.price} required/>
            <label> Weight </label><input type="text" onChange={handleChangeWeight} value={inputForm.weight} required/>
            <br /><br /><input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default FormBuah