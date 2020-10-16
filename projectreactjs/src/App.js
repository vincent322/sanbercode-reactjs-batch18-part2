import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';
import FormBuah from './Tugas-9/FormBuah';
import TblHargaBuah from './Tugas-10/TblHargaBuah';
import Timer from './Tugas-11/Timer';
import UpdateBuah from './Tugas-12/UpdtBuah';
import AxiosBuah from './Tugas-13/AxiosBuah';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Tugas-15/Routes";
import Buah from './Tugas-14/Buah';
import Navbar from './Tugas-15/Navbar';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./component/globalStyle";
import { lightTheme, darkTheme } from "./component/Theme"
// import logo from "./logo.svg";
// import ToggleDarkMode from './Tugas-15/ToggleDarkMode'

export default function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Home themeToggler={themeToggler} theme={theme}/>
      </ThemeProvider>
      {/* <FormBuah />
      <br />
      <TblHargaBuah />
      <br />
      <Timer /> */}
      {/* <UpdtBuah /> */}
      {/* <AxiosBuah /> */}
      {/* <Buah/> */}
    </>
  );
} 