import React from 'react';

function FormBuah() {
    return (
      <div style={{margin: 'auto', border: '5px solid #aaa', borderRadius: '10px', width: '50%', padding: '30px', backgroundColor: '#FFF'}}>
      <h1 style={{textAlign: 'center'}}>Form Pembelian Buah</h1>
        <form>
          <table className="table">
            <tr>
              <td width="300" margin="50px auto" padding="10px" align="center"><label className="text-bold">Nama Pelanggan</label></td>
              <td><input type="text" name="nama"></input></td>
            </tr>
            <tr>
              <td><label className="text-bold">Daftar Item</label></td>
              <td>
                <input type="checkbox" name="semangka"></input><label>Semangka</label><br></br>
                <input type="checkbox" name="jeruk"></input><label>Jeruk</label><br></br>
                <input type="checkbox" name="nanas"></input><label>Nanas</label><br></br>
                <input type="checkbox" name="salak"></input><label>Salak</label><br></br>
                <input type="checkbox" name="anggur"></input><label>Anggur</label>
              </td>
            </tr>
            <tr>
              <td><input type="submit" value="Kirim"></input></td>
            </tr>
          </table>
        </form>
      </div>
    );
  }

  export default FormBuah