import React,{Component, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useState} from 'react';
import {auth} from './firebase';
import './css/home.css'
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
//import {Button,Form,Alert} from "react-bootstrap";
//import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input';
//import {useUserAuth} from '../UserAuthContext';
//import ReactDOM from 'react-dom/client';
import axios from 'axios'
//import { createPortal } from 'react-dom'
import ReactDOM from 'react-dom';
const Home=()=>{
return(
    <div class="home">
    <div class="home_i">
    <nav>
    <Link to="/VoterReg">VoterReg</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/Electioncommissioner">Electioncommissioners</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/Electioncommissioner_index">Electioncommissioner_index</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
    
    </div>
     </div>
        
);
}
// ReactDOM.render(<Home/>,document.getElementById("home"))
// ReactDOM.unmountComponentAtNode(document.getElementById("root"));
export default Home