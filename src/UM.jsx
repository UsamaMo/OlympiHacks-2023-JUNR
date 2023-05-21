import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar/>
      
      <header className="App-header">
      <p>
          Please Scan your Barcode
      </p>
        
        
      </header>

      <body>
        
      </body>

     
    <Footer/>
    </div>
  );
}

export default App;
