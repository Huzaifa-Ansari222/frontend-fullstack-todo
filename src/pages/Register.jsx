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
                placeholder='Enter your name'
                />
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                required
                value={email} 
                type='email' placeholder='example@email.com'
                />
                <input 
                onChange={(e)=> setPassword(e.target.value)}
                required
                value={password}
                type='password' placeholder='@Password123'
                />
                <button type='submit'>Sign up</button>
                <p>------or------</p>
                <Link className='mybtn2' to='/login' style={{border:"1px solid black",padding:"15px",paddingRight:"60px",paddingLeft:"60px"}}>
                Login</Link>
            </form>
        </section>
    </div>
)
}

export default Register
//time 6:27:40 hr
