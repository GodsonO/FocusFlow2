import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./components/pages/Landingpage";
import Login from "./components/acount/Login";
import Register from "./components/acount/Register";
import Alltask from "./components/layout/dasebord/Alltask"


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
   

        <Route path="/" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Alltask" element={<Alltask />} />
  

      
      </Routes>
    </Router>
  </div>
  );
}

export default App;
