import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                        <Link to="/FormBuah">Tugas-9</Link> 
                    </li>
                    <li>
                        <Link to="/TblHargaBuah">Tugas-10</Link>
                    </li>
                    <li>
                        <Link to="/Timer">Tugas-11 </Link>
                    </li>
                    <li>
                        <Link to="/UpdtBuah">Tugas-12 </Link>
                    </li>
                    <li>
                        <Link to="/AxiosBuah">Tugas-13</Link>
                    </li>
                    <li>
                        <Link to="/Buah">Tugas-14</Link>
                    </li>
            </ul>
            </nav>
            </>

    );
}

export default NavBar 