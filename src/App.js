import logo from './logo.svg';
import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import VoterReg from "./components/VoterReg"
import Home from "./components/Home"
import Electioncommissioner from "./components/electioncommissioner_login"
import Electioncommissioner_base from "./components/electioncommissioner_base"
import Electioncommissioner_changephase from "./components/changephase"
import Deploy from "./components/ecdeploy"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>   
    <Route path='/VoterReg' element={<VoterReg/>}/>
    <Route path='/Electioncommissioner' element={<Electioncommissioner/>}/>
    <Route path='/Electioncommissioner_index' element={<Electioncommissioner_base/>}/>
    <Route path='/Electioncommissioner_deploy' element={<Deploy/>}/>
    <Route path='/Electioncommissioner_changephase' element={<Electioncommissioner_changephase/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
