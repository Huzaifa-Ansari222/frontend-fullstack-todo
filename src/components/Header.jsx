import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context , server } from '../main'//auth isauth
import axios from 'axios';
import toast from 'react-hot-toast';
import "../styles/header.css"

const Header = () => {

  const {isAuthenticated,setIsAuthenticated, loading ,setLoading} = useContext(Context);
  // console.log(isAuthenticated);

  const logoutHandler = async() =>{
    setLoading(true);
    try{
        //route of register from backend
      await axios.get(`${server}/users/logout`,{
        withCredentials: true, // for cookie
    });
    toast.success("Logout Successfully")//messg from backend
    setIsAuthenticated(false);
    setLoading(false);
    }catch(error){
        toast.error(error.response.data.message)//messg from backend
        setIsAuthenticated(true);// true on vid
        setLoading(false);
    }
};

  return (
    
    <nav className='header'>
        <div>
            <span className='titles' style={{fontWeight:'bolder',fontFamily:'monospace'}}>Task Log</span>
        </div>
        <article className='navv'>
            <Link style={{textDecoration:'none'}} to={'/'}><div>Home</div></Link>
            <Link style={{textDecoration:'none'}} to={'/profile'}><div>Profile</div></Link> 
            {
              isAuthenticated ? ( <button id='btn-to' disabled={loading} onClick={logoutHandler} className='btn'><span >Logout</span></button>
              )
              :
              (
              <Link style={{textDecoration:'none'}} id='btn-to' to={'/login'}><div >Login</div></Link> )
            }
        </article>
    </nav>
  )
}

export default Header;
