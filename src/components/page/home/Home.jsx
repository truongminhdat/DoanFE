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
            <h1 className="homeTitle">Loại Phòng Vip</h1>   
                <Feature/>
                <h1 className="homeTitle">Loại phòng bình dân</h1>
                <Feature/>
                <PropertyList/>
                <h1 className="homeTitle">Loại phòng thường</h1>
                <FeatureProperty/>
                <MailList/>
                <Footer/>
            </div>
        </div>
       
    )
}
export default Home
