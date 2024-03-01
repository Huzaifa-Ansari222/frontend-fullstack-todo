import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from './main';
import { server } from './main';
// import './styles/app.scss'

function App() {
  const {setUser, setIsAuthenticated} = useContext(Context);  

  useEffect(()=>{

    axios.get(`${server}/users/me`,{
      withCredentials: true, // for cookie
    }).then(res=>{
      setUser(res.data.user);
      setIsAuthenticated(true)//user login
    }).catch((error)=>{
      setUser({})
      setIsAuthenticated(false)//user not login
    })

  },[])

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />        
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
