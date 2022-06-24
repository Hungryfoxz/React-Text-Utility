// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
  // Switch
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')  // Whether dark mode is enabled or not..

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled.","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.","success");
    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    });
  } 



  return (

    <>
    <BrowserRouter>
    {/* <Router> */}


    <Navbar title="TextUtils" about="About Text" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
      {/* ####################################################################################### */}
      <Route exact path="/" element={
        <TextForm heading="Enter the text to analyze below : " mode={mode} showAlert={showAlert}/>}>
      </Route>
        {/* #################################################################################### */}
      <Route exact path="/about" element={
        <About mode={mode}/>}>
      </Route>

      </Routes>
    </div>


    {/* </Router> */}
    </BrowserRouter>
    </>

  );
}

export default App;
