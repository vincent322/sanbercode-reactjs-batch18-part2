import React, {useContext} from "react"
import {BuahContext} from './BuahContext'
import {InputContext} from './InputContext'
import axios from "axios";

const ListBuah = () => {
    const [daftarHargaBuah, setDaftarHargaBuah] = useContext(BuahContext)
    const [inputForm, setInputForm] = useContext(InputContext)

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(
            res => {
                let databuah = daftarHargaBuah.filter(x => x.id !== idBuah)
                setDaftarHargaBuah(databuah)
            }
        )
    }

    const handleEdit = (event) => {
        let idBuah = parseInt(event.target.value)
        let buah = daftarHargaBuah.find(x => x.id === idBuah)
        setInputForm({id: idBuah,name: buah.name, price: buah.price, weight: buah.weight})
    }

    return(
        <>
        <h1>List Harga Buah</h1>
        <table className="daftarBuah">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Weight</th>
                <th colSpan="2">Action</th>
            </tr>
            </thead>
            <tbody>
        {daftarHargaBuah !== null && ( daftarHargaBuah.map((item, index) => {
            return (
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.weight} kg</td>
                <td>
                    <button value={item.id} onClick={handleEdit}>Edit</button>
                    <button value={item.id} onClick={handleDelete}>Delete</button>
                </td>
                </tr>
            )
        }))
        }
        </tbody>
        </table>
        </>
    )
}
 
export default ListBuah