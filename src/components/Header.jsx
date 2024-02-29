import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main'//auth isauth

const Header = () => {

  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  console.log(isAuthenticated);

  return (
    <nav className='header'>
        <div>
            <h2>Task Log</h2>
        </div>
        <article>
            <Link to={'/'}>Home</Link>
            <Link to={'/profile'}>Profile</Link> 
            {
              isAuthenticated ? <button className='btn'>Logout</button>
              : <Link to={'/login'}>Login</Link>
            }

        </article>
    </nav>
  )
}

export default Header
