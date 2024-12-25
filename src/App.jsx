import  {useState}  from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(1)
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] =useState('Enable light')
  const [alert, setAlert] =useState(null)

  // const handleDecrement=()=>{
  //   setCount((count)=>count-1)
  // }
  // const handleIncrement=()=>{
  //   setCount((count)=>count+1)
  // }
 const showAlert=(type, message)=>{
 setAlert({
  type: type,
  message: message
 })
 setTimeout(() => {
  setAlert(null)
 }, 2000);
 }
  const toggleMode=()=>{
    if (mode=='light') {
      setMode('dark')
      setBtnText('Enable Light')
      showAlert("success", "Dark mode has been enabled")
    } else {
      setMode('light')
      setBtnText('Enable Dark')
      showAlert("danger", "light mode has been enabled")
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} btnText={btnText} toggleMode={toggleMode}  />
      <Alert  alert={alert} showAlert={showAlert}/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
     
      {/* <div className='container'>


        <h1 className='heading'>good evening everyone</h1>
        <div className="card ">
          <h4> count is: {count}</h4>
          <button onClick={handleIncrement}>
           increment
          </button>
          <button onClick={handleDecrement}>
           Decrement
          </button>


        </div>

      </div> */}
      </Router>
    </>
  )
}

export default App
