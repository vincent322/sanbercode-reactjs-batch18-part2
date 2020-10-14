import React, { useEffect, useState } from 'react';
import axios from "axios";

const AxiosBuah = () => {
    let allBuah = {
        id: 0,
        name: "",
        price: "",
        weight: 0
    }
    const [dataBuah, setDataBuah] = useState([])
    const [tempBuah, setTempBuah] = useState(allBuah)
    const [load, setLoad] = useState(false)

    const getData = () => {
        setLoad(true)
        axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then((res) => {
                setLoad(false)
                let data = res.data
                data = data.filter((e) => {
                    return e.weight > 0
                })
                setDataBuah(data)
            })
            .catch((err) => {
                setLoad(null)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        setTempBuah({ ...tempBuah, ...{ [id]: value } });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoad(true)
        if (tempBuah.name !== "") {
            if (tempBuah.id === 0) {
                axios.post("http://backendexample.sanbercloud.com/api/fruits", tempBuah)
                    .then((res) => {
                        if (res.status === 201) {
                            getData()
                            setLoad(false)
                            setTempBuah(allBuah)
                        }
                    })
                    .catch((err) => {
                    setLoad(null)
                    })
            } else {
                axios.put(`http://backendexample.sanbercloud.com/api/fruits/${tempBuah.id}`,tempBuah)
                .then((res) => {
                    if (res.status === 200) {
                        getData()
                        setLoad(false)
                        setTempBuah(allBuah)
                    }
                })
                .catch((err) => {
                setLoad(null)
                })
            }
        }else{
            alert("Data Tidak Boleh Kosong!")
            setLoad(false)
        }
    }

    const handleEdit = (e) => {
        setTempBuah(dataBuah[e.target.value])
    }

    const handleDelete = (e) => {
        setLoad(true)
        const id = dataBuah[e.target.value].id
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then((res) => {
                if (res.data === "success") {
                    getData()
                    alert("Data Berhasil Dihapus")
            }
            })
            .catch((err) => {
            alert("Gagal Hapus Data")
            })
    }

    return (<>
        <h1>Table Data Buah</h1>
        <table className="daftarBuah">
            <thead>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Weight</th>
                <th colSpan="2">Action</th>
            </thead>
            <tbody>
                {load&&(<td colSpan="6">Processing data</td>)}
                {load===null&&(<td colSpan="6">Fatal Eror</td>)}
                {dataBuah !== null && dataBuah.map((item, index) => {
                        return (<>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>Rp. {item.price}</td>
                                <td>{item.weight / 1000} kg</td>
                                <td><button value={index} onClick={handleEdit}>Edit</button> <button value={index} onClick={handleDelete}>Delete</button></td>
                            </tr>
                        </>)
                })}
            </tbody>
        </table>
        <h1>Tambah Data Buah</h1>
        <form className="input">
            <span>
            <label for="nama">Nama</label>    
                <input type="text" id="name"  onChange={handleChange} value={tempBuah.name} required />
            </span>
            <span>
            <label for="harga">Harga</label>
                <input type="number" id="price" onChange={handleChange} value={tempBuah.price} required />
            </span>
            <span>
            <label for="Berat">Berat</label>
                <input type="number" id="weight" onChange={handleChange} value={parseInt(tempBuah.weight)} required />
            </span>
            <span><button onClick={handleSubmit}>Submit</button></span>
        </form>
    </>)
}

export default AxiosBuah