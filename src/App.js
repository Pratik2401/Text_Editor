import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Editor - Dark Edition";
    } else {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", 'success');
      document.title = "Text Editor - Light Edition";
    }
  }

  return (
  
      <div>
        <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} text={textMode}/>
        <Alert alert={alert}/>
        <TextForm heading="Enter Text Here" mode={mode} toggleMode={toggleMode} text={textMode} showAlert={showAlert} />
        </div>
  );
}

export default App;
