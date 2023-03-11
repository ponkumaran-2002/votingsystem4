import React,{Component, useEffect} from 'react';
import {useState} from 'react';
import './css/electioncommissioner.css'
import {auth} from './firebase';
//import firebase from "firebase";
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import axios from 'axios'
import Ec_base from './electioncommissioner_base' 
import Alert from'./Alert'
import { withRouter } from "react-router";
let Number="";
const EC_login=()=>{
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDisabled1, setIsDisabled1] = useState(false);
    const [Loginid,setLoginId]=useState("");
    const [Password,setPassword]=useState("");
    const [expandForm,setExpandForm]=useState(false);  
    const [OTP,setOtp]=useState("");
    const [alert,setAlert]=useState(null);
    const [ec,setEc]=useState(null);
    useEffect(() => {
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = function(event) {
        window.history.go(1);
      };
     
    });
   //  const showEc=(id)=>{
   //    setEc({
   //       name:id
   //    })
   //  }
   // const Ec_b=()=>{
   //    return <Ec_base name={Loginid}/>
   // }
   //auth().settings.appVerificationDisabledForTesting = true;
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
               console.log("You are correct")
               // showEc(Loginid)
               // Ec_b()
            //  <Ec_base name={Loginid}/>               
            //    axios.post("http://localhost:5000/voterid/insert",{id:voterid,acno:AccountNo,name:Name,dob:Dob,addr:Address,phno:Number}).then(res=>{
            //                       console.log("Inside Verify OTP")
                                   window.location.replace("http://localhost:3000/Electioncommissioner_index")
                                   localStorage.setItem('idl', JSON.stringify(Loginid));
            // })
            
           }).catch((error)=>{
                        
           });
         }

      }
    const register=(e)=>{
      e.preventDefault();
        axios.post("http://localhost:5000/voterid/getec",{id:Loginid,password:Password}).then(res=>{
         console.log(res)
        if(typeof(res.data[0]) === "undefined"){
       showAlert('Enter Valid LoginID or Password','Error')  
      }  
        else{
         setIsDisabled(!isDisabled);
         setIsDisabled1(!isDisabled1);
         e.target.style.display="none";
         console.log(typeof(res.data[0].PhoneNo))
         Number=res.data[0].PhoneNo
         setExpandForm(true)
         requestOTP(Number); 
        }
        })
    
    }
return(
       <div class="animated bounceInDown">
    <div class="container">
    <span class="error animated tada" id="msg"></span>
    <Alert alert={alert}/>
    <h4>The Voting System</h4>
    <form name="form1" class="box">
          <h4>Election<span>Commissioner</span></h4>
          <h5>Login</h5>
          <input type="text" id="voterid" value={Loginid} disabled={isDisabled} onChange={(e)=>setLoginId(e.target.value)} placeholder="LoginID" />
          <input type="password" name="accountno" value={Password} disabled={isDisabled1} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
          <button onClick={register} class="btn1" disabled={isDisabled1}>Request OTP</button>
    </form>
    
    
    <form  class="box">
    { expandForm === true?
              <>
              <div className="otp">
                <label htmlFor='otpInput' className="form-label">OTP:
                <input type="Number" onChange={(e)=>setOtp(e.target.value)}/> 
                </label>
                <button onClick={verifyOTP}>Login</button>
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
            {/* <input type="submit" className="RequestOtp-btn" name="SendOTP" value="SendOTP"/> */}
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
export default EC_login