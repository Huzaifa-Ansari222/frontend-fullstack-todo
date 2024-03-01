import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context , server } from '../main'//auth isauth
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {

  const {isAuthenticated,setIsAuthenticated, loading ,setLoading} = useContext(Context);
  // console.log(isAuthenticated);

  const logoutHandler = async(e) =>{
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
        setIsAuthenticated(false);// true on vid
        setLoading(false);
    }
};

  return (
    <nav className='header'>
        <div>
            <h2>Task Log</h2>
        </div>
        <article>
            <Link to={'/'}>Home</Link>
            <Link to={'/profile'}>Profile</Link> 
            {
              isAuthenticated ? ( <button disabled={loading} onClick={logoutHandler} className='btn'>Logout</button>
              )
              :
              (
              <Link to={'/login'}>Login</Link> )
            }

        </article>
    </nav>
  )
}

export default Header
