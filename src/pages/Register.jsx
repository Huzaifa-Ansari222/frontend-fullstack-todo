import React, { useState,useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { Context, server } from '../main';
import toast from 'react-hot-toast';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated,setIsAuthenticated,loading ,setLoading} = useContext(Context);



    const submitHandler = async(e) =>{
        setLoading(true);
        e.preventDefault();
        // console.log(name,email,password);
        try{
        const {data} = await axios.post(`${server}/users/new`,
        {
            name,
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
        setLoading(false)
        }catch(error){
            toast.error(error.response.data.message)//messg from backend
            // console.log("catch",error);
            setIsAuthenticated(false);
            loading(false)
        }
    };

    if(isAuthenticated) return <Navigate to={'/'}/>
return (
    <div className='login'>
        <section>
            <form onSubmit={submitHandler}>
                <input 
                onChange={(e)=> setName(e.target.value)}
                required
                value={name} 
                type='text'
                placeholder='Username'
                />
                <input 
                style={{marginTop:'30px'}}
                onChange={(e)=> setEmail(e.target.value)}
                required
                value={email} 
                type='email' placeholder='Email'
                />
                <input 
                style={{marginTop:'30px',marginBottom:'30px'}}
                onChange={(e)=> setPassword(e.target.value)}
                required
                value={password}
                type='password' placeholder='Password'
                />
                <button type='submit'>Sign up</button>
                <p>------or------</p>
                <Link className='btn' to='/login'>Login</Link>
            </form>
        </section>
    </div>
)
}

export default Register
//time 6:27:40 hr
