import React from 'react';
import "./Navbar.css";

const NavBar = ({ themeToggler, theme }) => {
    console.log(themeToggler);
    return (
        <div className="toggleChange">
            <span className="labelSwitch">{theme} MODE</span>
            <label className="switch">
                <input type="checkbox" onChange={themeToggler} checked={theme==="dark"?true:false}/>
            <span className="slider"></span>
            </label>
        </div>
    );
}

export default NavBar 