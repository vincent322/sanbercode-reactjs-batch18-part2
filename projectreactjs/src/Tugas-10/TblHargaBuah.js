import React from 'react'


let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class NamaBuah extends React.Component {
    render() {
        return (
            <>
                <td style={{backgroundColor: 'tomato'}}>{this.props.name}</td>
            </>
        );
    }
}

class HargaBuah extends React.Component {
    render() {
        return (
            <>
                <td style={{backgroundColor: 'tomato'}}>{this.props.name}</td>
            </>
        );
    }
}

class BeratBuah extends React.Component {
    render() {
        return (
            <>
                <td style={{backgroundColor: 'tomato'}}>{this.props.name/1000} Kg</td>
            </>
        );
    }
}

function TblHargaBuah() {
    return (
        <>
            <div className ="tugas">
                <h1 style={{textAlign: 'center'}}>Tabel Harga Buah</h1>
                <table border="1" style={{width: '100%'}}>
                    <tr>
                        <th style={{width: '44%', backgroundColor: 'grey'}}>Nama</th>
                        <th style={{width: '40%', backgroundColor: 'grey'}}>Harga</th>
                        <th style={{width: '96%', backgroundColor: 'grey'}}>Berat</th>
                    </tr>
                    {dataHargaBuah.map(el=> {
                        return (
                        <tr>
                            <NamaBuah name={el.nama}/>
                            <HargaBuah name={el.harga}/>
                            <BeratBuah name={el.berat}/>
                        </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
}

export default TblHargaBuah