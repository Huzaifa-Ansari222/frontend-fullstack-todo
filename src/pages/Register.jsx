import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { server } from '../main';
import toast from 'react-hot-toast';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = async(e) =>{
        e.preventDefault();
        // console.log(name,email,password);
        try{
            //route of register from backend
        const {data} = await axios.post(`${server}/users/new`,
        {
            name,
            email,
            password//pass user input to backend
        },
        {
            header:{
                "Content-Type":"application/json" //by default
            },
            withCredentials: true ,// for cookie
        }
        );
        toast.success(data.message)//messg from backend

        }catch(error){
            toast.error("Some error")//messg from backend
            console.log(error);
        }
        
    };

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
