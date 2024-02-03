import React, {useState} from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

   const [Mode, setMode] = useState('light');

   const [alert, setAlert] = useState('');

   const togleMode = () => {
      if(Mode === 'light'){
         setMode('grey');
         document.body.style.backgroundColor = 'grey';
         showAlert("Dark Mode Enables!", 'success')
         
      }
      else{
         setMode('light')
         document.body.style.backgroundColor = 'white';
         showAlert("Light Mode Enables!", 'success')
      }
   }

   const showAlert = (message, type) => {
      setAlert ({
         msg: message,
         type: type

      })
      setTimeout(() => {
         setAlert(null)
      }, 2500);
      
   }

  return (
         <>
         <Router>
            <Navbar title="textUtils" mode={Mode}  togleMode={togleMode}/>
            <Alert alert= {alert}/>
         
            <div className="container">
               <Routes>
                  <Route path="/" element={<TextForm mode={Mode} showAlert={showAlert} heading="Enter your text below :" />}/>
                  <Route path="/about" element={<About/>}/>
               </Routes>
            </div>
         </Router>
         </>
         );
}     

export default App;
