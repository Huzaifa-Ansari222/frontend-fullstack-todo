import React, { useState,useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { Context, server } from '../main';
import "../styles/login.css"


const Login = () => {

    const {isAuthenticated,setIsAuthenticated,loading ,setLoading} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const submitHandler = async(e) =>{
        e.preventDefault();
        setLoading(true)
        // console.log(name,email,password);
        try{
            //route of register from backend
        const {data} = await axios.post(`${server}/users/login`,
        {
            email,
            password,//pass user input to backend
        },
        {
            headers:{
                "Content-Type": "application/json", //by default
            },
            withCredentials: true, // for cookie
            }
        );
        toast.success(data.message)//messg from backend
        setIsAuthenticated(true);
        setLoading(false);
        }catch(error){
            toast.error(error.response.data.message)//messg from backend
            // console.log("catch",error);
            setIsAuthenticated(false);
            setLoading(false);
        }
    };
    if(isAuthenticated) return <Navigate to={'/'}/>

return (

    <div className='login' >
        <section>
            <form onSubmit={submitHandler}>
                <input 
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                type='email' placeholder='Email'
                />
                <input 
                style={{marginTop:'30px',marginBottom:'30px'}}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                type='password' placeholder='Password'
                />
                <button disabled={loading} type='submit'>Login</button>
                <p>------or------</p>
<<<<<<< HEAD
                <Link to='/register' className='mybtn2' style={{border:"1px solid black",padding:"15px",paddingRight:"60px",paddingLeft:"60px"}}
                >Sign up</Link>
=======
                <Link className='btn' to='/register'>Sign up</Link>
>>>>>>> style
            </form>
        </section>
    </div>
)
}

export default Login
