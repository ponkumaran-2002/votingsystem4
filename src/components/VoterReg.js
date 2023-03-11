import React,{Component, useEffect} from 'react';
import {useState} from 'react';
import './css/voterreg.css'
import {auth} from './firebase';
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import axios from 'axios'
import Alert from'./Alert'
//import ReactDOM from 'react-dom/client';
//import { createPortal } from 'react-dom'
import ReactDOM from 'react-dom';
let Number="";
const VoterReg=()=>{
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isDisabledr1, setIsDisabledr1] = useState(false);
    const [voterid,setVoterid]=useState("");
    const [AccountNo,setAccountNo]=useState("");
    const [expandForm,setExpandForm]=useState(false);  
    const [OTP,setOtp]=useState("");
   const [alert,setAlert]=useState(null);
    const [Name,setName]=useState("");
    const [Dob,SetDob]=useState("");
    const [Address,setAddress]=useState("");
    const showAlert=(message,type)=>{
      setAlert({
       msg: message,
       type: type
 
      })
      setTimeout(()=>{
       setAlert(null);
      },3000)
     }
         const generateRecaptcha=()=>{
          console.log("genreateRecaptchas")
       window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
          'size' : 'invisible',
           'callback': (response) => {
          }
         }, auth);
         console.log("endof generaterecaptcha")
      }
      const requestOTP=(number1)=>{
       if(number1.length>=12){
        setExpandForm(true);
        generateRecaptcha();
            let appVerifier=window.recaptchaVerifier;
            signInWithPhoneNumber(auth,number1,appVerifier).then(confirmationResult=>{
              console.log("Inside Request OTP")
               window.confirmationResult = confirmationResult;
            }).catch((error)=>{
               console.log(error);
            });
       }
      }
      const verifyOTP=(e)=>{
         e.preventDefault();
         console.log(OTP)
         console.log("verify OTP");
         if(OTP.length===6){
            console.log(OTP)
         window.confirmationResult.confirm(OTP).then(()=>{
               console.log("You are Correct");
               console.log("AccountNO");
               console.log(AccountNo);
               console.log("Name"+Name)
               console.log("DOB"+Dob)
               console.log("voterid"+voterid)
               console.log("Address"+Address)
               console.log("Phno"+Number)
               axios.post("http://localhost:5000/voterid/insert",{id:voterid,acno:AccountNo,name:Name,dob:Dob,addr:Address,phno:Number}).then(res=>{
                                  console.log("Inside Verify OTP")
                                  window.location.replace("http://localhost:3000")
            })
           }).catch((error)=>{
           });
         }

      }
    const register=(e)=>{
      e.preventDefault();
      e.target.style.display="none";
      setIsDisabled(!isDisabled);
      setIsDisabled1(!isDisabled1);
     console.log("hello");
     console.log(voterid);
        axios.post("http://localhost:5000/voterid/get",{id:voterid}).then(res=>{
            console.log(res.data[0].PhoneNo);
          Number=res.data[0].PhoneNo;
           setName(res.data[0].Name);
           SetDob(res.data[0].DOB);
           setAddress(res.data[0].Address);
           console.log(res)
           requestOTP(Number);
        })
    
    }
return(
<div class="animatedbounceInDown">
    <div class="container">
    <span class="error animated tada" id="msg"></span>
    <h4>The Voting System</h4>
    <form name="form1" class="box">
          <h4>Voter<span>Registration</span></h4>
          <h5>Register Yourself</h5>
          <input type="text" id="voterid" value={voterid} disabled={isDisabled} onChange={(e)=>setVoterid(e.target.value)} placeholder="VoterID" />
          <input type="text" name="accountno" value={AccountNo} disabled={isDisabled1} onChange={(e)=>setAccountNo(e.target.value)} placeholder="Account NO"/>
          <button onClick={register} class="btn1" disabled={isDisabled}>Request OTP</button>
    </form>
    
    <form  class="box">
    { expandForm === true?
              <>
              <Alert alert={alert}/>
              <div className="otp">
                <label htmlFor='otpInput' className="form-label">OTP:
                <input type="Number" onChange={(e)=>setOtp(e.target.value)}/> 
                </label>
                <button onClick={verifyOTP}>VerifyOTP</button>
                <button onClick={requestOTP}>ResendOTP</button>
                <div id="otpHelp" className="form-text">Please Enter the OTP Sent to the corresponding Mobile Number</div>
               </div> 
              </>
              :
              null

        }
        {
            expandForm === false?
            <>
            <div className="requestotp">
             </div> 
            </>
            :
            null
        }
         <div id="recaptcha-container"/> 
        </form>

    </div>
     </div>
    
   
);
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// render(<VoterReg/>);
// {createPortal(
//    <VoterReg/>,
//    document.body
//  )}
export default VoterReg