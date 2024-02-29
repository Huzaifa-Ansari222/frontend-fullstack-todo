import React, { useState,useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { Context, server } from '../main';
import toast from 'react-hot-toast';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isAuthenticated,setIsAuthenticated} = useContext(Context);



    const submitHandler = async(e) =>{
        e.preventDefault();
        // console.log(name,email,password);
        try{
            //route of register from backend
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
        }catch(error){
            toast.error(error.response.data.message)//messg from backend
            console.log("catch",error);
            setIsAuthenticated(false);

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
                <Link to='/login'>Login</Link>
            </form>
        </section>
    </div>
)
}

export default Register
