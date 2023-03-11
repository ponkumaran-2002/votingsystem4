import React,{Component, useEffect} from 'react';
import {useState} from 'react';
// import './css/electioncommissioner.css'
import {auth} from './firebase';
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import axios from 'axios'
import Alert from'./Alert'
// import deploy from './votingsystemB/deploy';
let Number="";
const Deploy=()=>{
    const [Account_no,setAccountNo]=useState("");
    const [expandForm,setExpandForm]=useState(false);  
    const [OTP,setOtp]=useState("");
    const [alert,setAlert]=useState(null);
    const [isDisabled1, setIsDisabled1] = useState(false);
    var loginid;
  const [Loginid,setLoginid]=useState("");
  useEffect(() => {
    loginid = JSON.parse(localStorage.getItem('id'));
    setLoginid(loginid);
    console.log(loginid);
  });
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
               axios.post("http://localhost:5000/voterid/deploy",{id:Loginid,acno:Account_no}).then(res=>{
                                  console.log("Inside Verify OTP")
                                  window.location.replace("http://localhost:3000/Electioncommissioner_index")
            })
           }).catch((error)=>{
                        
           });
         }
      }
    const deploy=(e)=>{
      e.preventDefault();
        axios.post("http://localhost:5000/voterid/getecl",{id:Loginid}).then(res=>{
         console.log(res)
        if(typeof(res.data[0]) === "undefined"){
       showAlert('Enter Valid LoginID or Password','Error')  
      }  
        else{
         e.target.style.display="none";
         setAccountNo(res.data[0].Account_no)
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
    <h4>Deploying Contract</h4>
    <form name="form1" class="box">
          <h5>Click the Button To Deploy the Contract</h5>
          <button onClick={deploy} class="btn1" disabled={isDisabled1}>Deploy</button>
{/* register */}
    </form>
    
    
    <form  class="box">
    { expandForm === true?
              <>
              <div className="otp">
                <label htmlFor='otpInput' className="form-label">OTP:
                <input type="Number" onChange={(e)=>setOtp(e.target.value)}/> 
                </label>
                <button onClick={verifyOTP}>Deploy</button>
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
export default Deploy