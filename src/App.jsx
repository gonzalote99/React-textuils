import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';


import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(3 39 67)"
      showAlert("dark enabled", "success")
      document.title = "textutils - darkmode"
      
      
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("light enabled", "success")
      document.title = "textutils - lightmode"
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return(
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toogleMode={toggleMode} aboutText='about us' />
     <Alert alert={alert} />
      <div className='container my-4'>
      <Routes>
      <Route exact path='/' element={<TextForm title="welcome to textutils" showAlert={showAlert} mode={mode} />} />
        <Route exact path='/about' element={<About mode={mode} />} />
      </Routes>
      </div>

    </Router>
    </>
  );
}

export default App;