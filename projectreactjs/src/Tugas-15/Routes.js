import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Tugas9 from "../Tugas-9/FormBuah";
import Tugas10 from "../Tugas-10/TblHargaBuah";
import Tugas11 from "../Tugas-11/Timer";
import Tugas12 from "../Tugas-12/UpdtBuah";
import Tugas13 from "../Tugas-13/AxiosBuah";
import Tugas14 from "../Tugas-14/Buah";
import Home from "./Home";
import NavBar from "./Navbar"

export default function App({ themeToggler, theme }) {
    return (
        <Router>
            <NavBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/FormBuah">
                        <Tugas9 />
                    </Route>
                    <Route exact path="/TblHargaBuah">
                        <Tugas10 />
                    </Route>
                    <Route exact path="/Timer">
                        <Tugas11 />
                    </Route>
                    <Route exact path="/UpdtBuah">
                        <Tugas12 />
                    </Route>
                    <Route exact path="/AxiosBuah">
                        <Tugas13 />
                    </Route>
                    <Route exact path="/Buah">
                        <Tugas14 />
                    </Route>
                    <Route exact path="/Home">
                        <Home themeToggler={themeToggler} theme={theme}/>
                    </Route>
                </Switch>
        </Router>
    );
}