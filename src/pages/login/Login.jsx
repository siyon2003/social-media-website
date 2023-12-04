import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { useState } from 'react';


const Login = () => {
  const {login}=useContext(AuthContext);
  const navigate =useNavigate();
  const [inputs,setinputs]=useState({
    username:"",
    password:""
  })
  const handleChange=(e)=>{
    setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleLogin= async(e)=>{
      e.preventDefault();
      try{
        await login(inputs);
        navigate("/");
      }
      catch(err){
        console.log(err.response.data);
      }
  }
  return (
   <div className="login">
    <div className="card">
        <div className="left">
            <h1> Its SAGA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .</p>
            <span>Hi hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </span>
            <Link to={'/register'}><button>Register</button></Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' name="username" onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
    </div>
   </div>
  )
}

export default Login