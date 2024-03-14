import React from 'react'
import{Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate = useNavigate()

    const handlesubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            console.log("result")
            if(result.data==="Success"){
                navigate('/')
            }
            else{
                alert('Username or password is incorrect')
            }
            
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className="bg-white p-3 rounded w-30">
            <h2>Login</h2>
            <form onSubmit={handlesubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input type='email' placeholder='Enter The Email' className='form-control rounded-0' autoComplete='off'
                    name="email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input type='password' placeholder='Enter password' className='form-control rounded-0' autoComplete='off'
                    name="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>

                </form>
                <p>Don't Have An Acoount?</p>
                <Link className='btn btn-default border w-100 bg-light ronded-0 text decoration-none'to="/register">Register</Link>
        </div>
    </div>
  )
}

