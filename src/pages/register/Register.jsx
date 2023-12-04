import { Link } from 'react-router-dom';
import './register.scss';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs,setinputs]=useState({
    username:"",
    email:"",
    name:"",
    password:""
  })

  const [err,setErr]=useState(null)
  const [fillerr,setFillerr]=useState(null);
  const handleChange =(e)=>{
    setinputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(inputs.username ==="" || inputs.email === "" || inputs.name ==="" || inputs.password ===""){
      setFillerr("Enter the details");
      return;
    }
    if(inputs.username.length !== 0 && inputs.email.length !==0 && inputs.name.length !==0 && inputs.password.length !==0){
      setFillerr("");
    }
    try{
      await axios.post("http://localhost:8800/api/auth/register",inputs)
    }
    catch(err){
      setErr(err.response.data)
    }
  }

  return (
    <div className="register">
    <div className="card">
        <div className="left">
            <h1> Its SAGA</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna .</p>
            <span>Hi hello Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </span>
            < Link to={'/'}><button>Login</button></Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' name="username" onChange={handleChange} required/>
            <input type="text" placeholder='Name' name="name" onChange={handleChange} required/>
            <input type="email" placeholder='Email' name="email" onChange={handleChange} required/>
            <input type="password" placeholder='Password'name="password" onChange={handleChange} required/>
            {err}
            {fillerr && fillerr}
            <button onClick={handleSubmit}>Register</button>
          </form>
        </div>
    </div>
   </div>
  )
}

export default Register