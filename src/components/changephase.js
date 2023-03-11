import React,{Component, useEffect} from 'react';
import {useState} from 'react';
import './css/electioncommissioner_changephase.css'
import {auth} from './firebase';
import {getAuth,RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import axios from 'axios'
import Alert from'./Alert'
// import deploy from './votingsystemB/deploy';
let Number="";
let c=[];
//const [caddress, setcaddress] = useState([])
const ChangePhase=()=>{
    var loginid;
    const nochange=0;
    const [Loginid,setLoginid]=useState("");
    const [caddress, setCaddress] = useState([]);
    //const [Caddress, setCaddress] = useState([]);
    const [value, setValue] = useState('');
    let Caddress=[];
    let Caddress3=[];
    
        useEffect(() => {
        // loginid = JSON.parse(localStorage.getItem('id'));
        // setLoginid(loginid);
        const func=async()=>{
          loginid = JSON.parse(localStorage.getItem('idl'));
          // setLoginid(loginid);
           console.log('loginid')
           console.log(loginid)
          // console.log('Loginid')
          // console.log(Loginid)
          await axios.post("http://localhost:5000/voterid/getcontractaddress",{lid:loginid}).then(res=>{
          console.log(res.data)
          //setCaddress(res.data[0].Contract_address)
          console.log('inside getCaddress')
          console.log(caddress)
          Caddress.push(res.data)
          console.log(Caddress[0].length)
          console.log(Caddress[0][0].Contract_address)
          console.log(Caddress[0].length)
          for(var i=0;i<Caddress[0].length;i++)
          {      
            Caddress3.push(Caddress[0][i].Contract_address)
            console.log('Caddress3')
            console.log(Caddress3)

          }
          }).catch((error)=>{ });
      }
      
        func();
        //console.log()
        // const options = ()=>{
        //   
        // }
        //options();
       // options;

        //////getCaddress();
      },nochange);

      // const getCaddress=()=>{
      //   // loginid = JSON.parse(localStorage.getItem('id'));
      //   // setLoginid(loginid);
      //     axios.post("http://localhost:5000/voterid/getcontractaddress",{lid:Loginid}).then(res=>{
      //       // console.log(res.data)
      //       // console.log(res) .Contract_address
      //       console.log(res.data)
      //       setcaddress(res.data)
      //       console.log('inside getCaddress')
      //       console.log(caddress)

            
      //       //   console.log(res.data.length)
      //       //  for(var i=0;i<res.data.length;i++){
      //       //   c.push(res.data[i].Contract_address)
      //       //    // c.push(res.data[])
      //       //    console.log(res.data[i].Contract_address);   
      //       //  }
      //       //  console.log('hello')
      //       //  console.log(c);
      //       //  console.log(c[0])
      //       }).catch((error)=>{ });
      // }
    //   const onOptionChangeHandler = (event) => {
    //     console.log("User Selected Value - ", event.target.value)
    // }
      const cast=()=>{
      }
      //console.log(item)
      
      const opt=Caddress3.map((item)=>{
        <option value={item}>
          {item}
        </option>
      })
      // const options=Caddress[0].map((item)=>(
      // ))
return(
    <div>
       {/* <h1>{c}</h1>--> */}

    <span class="error animated tada" id="msg"></span>
    <h4>Change the Phase of the Election</h4>
    <select>
            <option value="">Select An Option</option>
            {opt}
    </select>
    {/* <select onChange={onOptionChangeHandler}>
      <option>Please choose one option</option>
         {this.c.map((option, index) => {
          return <option key={index} >
        {option}
      </option>
  })}
</select> */}

          <br/>
          {/* <h1>{caddress[0]}</h1> */}
          <button  onClick={cast} class="btn2">Casting</button>
          <br/>
          <button class="btn3">Result</button>
          <br/>   
          {/* <h3>{this.caddress}</h3>        */}


    </div>
);
}
export default ChangePhase