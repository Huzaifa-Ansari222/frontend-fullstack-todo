import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
return (
    <div className='login'>
        <section>
            <form >
                <input type='email' placeholder='example@email.com'/>
                <input type='password' placeholder='@Password123'/>
                <button type='submit'>Login</button>
                <p>------or------</p>
                <Link to='/register'>Sign up</Link>
            </form>
        </section>
    </div>
)
}

export default Login
