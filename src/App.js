// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Weather dark mode is enable or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='TextUtils';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <div className="container my-3">
    <Routes> */}

    <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About />}></Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text" mode={mode} />  } */}
            {/* ></Route> */}
          {/* </Routes> */}
        </div>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route path="/">
          
          </Route> */}
    {/* </Routes>
    </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
