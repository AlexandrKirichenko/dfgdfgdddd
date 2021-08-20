import './App.scss';
import SideBar from "./components/SideBar";
import Header from "./layouts/Header";
import Promo from "./components/Promo";
import Customers from "./components/Customers";
import Features from "./components/Features";
import Sysop from "./components/Sysop";
import Signage from "./components/Signage";
import CreateAcc from "./components/CreateAcc";
import Footer from './layouts/Footer'
import React from "react";

function App() {
  return (
            <>
                <SideBar/>
                <Header/>
                <Promo/>
                <Customers/>
                <Features />
                <Sysop />
                <Signage />
                <CreateAcc/>
                <Footer/>
            </>
  );
}

export default App;
