import React from "react";
import Footer from "../footer/Footer";
import Feature from "../feature/Feature";
import FeatureProperty from "../featureProperty/FeatureProperty";
import Header from "../header/Header";
import MailList from "../mailList/MailList";
import Navbar from "../navbar/Navbar";
import PropertyList from "../property/Property";
import './home.css'
const Home = () => {
    return(
        <div>
           
            <Navbar/>

            <Header/>
            <div className="homeContainer">
                <Feature/>
                <h1 className="homeTitle">Browser by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeatureProperty/>
                <MailList/>
                <Footer/>
            </div>
        </div>
       
    )
}
export default Home
