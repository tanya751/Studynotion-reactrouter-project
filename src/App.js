import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard'; 
import React from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const[isLoggedIN, setisLoggedIN] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIN={isLoggedIN} setisLoggedIN={setisLoggedIN}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIN={isLoggedIN}/>} />
        <Route path="login" element={<Login setisLoggedIN={setisLoggedIN}/>}/>
        <Route path="signup" element={<Signup setisLoggedIN={setisLoggedIN}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
    </div>
  );
}

export default App;
