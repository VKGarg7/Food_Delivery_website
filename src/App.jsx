import "./App.css"
import Header from "./components/Header";
import Body from "./components/Body";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext"
import { useEffect, useState } from "react";
import {Provider} from "react-redux";
import AppStore from "./utils/AppStore";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <Provider store={AppStore}>
            <div className="top">
                <Header/>
                <Outlet/>
                <Footer/>
                <ToastContainer/>
            </div>
        </Provider>
    )
}

export default App;