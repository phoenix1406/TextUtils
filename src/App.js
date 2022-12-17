// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

  function App() {
    const [alert,setAlert] = useState(null)  
    const [mode,setMode] = useState("light");
    
    const [textcontent, setTextContent] = useState('Enable Dark Mode');
    

    const toggleColor = (value)=>{
       
      
      document.body.style.backgroundColor= value;
     }
    
    const showAlert =(message,type)=>{
      setAlert({
        msg:message,
         type:type

      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
    const toggleMode = ()=>{
      if(mode==='light'){
      setMode('dark');
      showAlert(' Dark Mode has been Enabled','success');
      setTextContent('Enable Light Mode');
      document.title = 'TextUtils - DarkMode';
      // document.body.style.backgroundColor= '#042743';

    }
    else{
      setMode('light');
      showAlert(' Light Mode has been Enabled','success');
      setTextContent('Enable Dark Mode');
      // document.body.style.backgroundColor= 'white';
      document.title='TextUtils - LightMode';
    }
  }

    return (
      <>
      <Router>
      <Navbar title = "Text-Utils" about ="About" mode = {mode} toggleMode={toggleMode}  textcontent= {textcontent} toggleColor={toggleColor} />
       <Alert alert={alert}/>
        
        
        <Routes>
          <Route exact  path="/about"
            element=
          {
           <div className="container">
        
          <About />
            </div>
             } 
            />
            
         
          < Route exact path="/" element={
          <div className="container">
            <Textform heading = "Enter the text to analyze below" mode ={mode} showAlert={showAlert}/>
        </div>}
          />
          
        </Routes>
        </Router>
      </>
    );
  }

export default App;
