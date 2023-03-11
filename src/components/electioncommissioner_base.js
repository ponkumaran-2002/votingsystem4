import React,{Component, useEffect} from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";
import './css/electioncommissioner_base.css'
import {auth} from './firebase';
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import axios from 'axios'
import Alert from'./Alert'
let Number="";
function Ec_base(){
  var loginid
  const hl="jeedc"
  const [li,setLoginid]=useState("");
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', function (event){
        window.history.pushState(null, document.title,  window.location.href);
    });
    loginid = JSON.parse(localStorage.getItem('idl'));
    setLoginid(loginid);
    console.log(localStorage.getItem('idl'))
    console.log(loginid);
  });
  const logout=()=>{
    localStorage.removeItem('id');
  }
return(
<div class="ecbase">
  <div class="navigation">
    {/* <h1>{this.Loginid}</h1> */}
    <ul>
      <a href="http://www.sashatran.com/" class="active" target="_blank">Home</a>
      <Link to="/Electioncommissioner_deploy"  target="_self">ContractDeploy</Link>
      <Link to="/Electioncommissioner_changephase" target="_self">ChangePhase</Link>
      <a href="https://twitter.com/sa_sha26" target="_blank">AddParticipant</a>
    </ul>
    <h1>{li}</h1>
    <div class="dropdown">
  <button class="dropbtn">Profile</button>
  <div class="dropdown-content">
    <h4><b>LoginId:</b>{li}</h4>
    <Link>About</Link>
    <Link to="/" onClick={logout}>Logout</Link>
    {/* <Link>About</Link> */}
    </div>
</div>

  </div>
</div>
)
}
export default Ec_base