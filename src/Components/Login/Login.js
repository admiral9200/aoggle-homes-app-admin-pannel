import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import "../GlobalStyle.css"

const Login = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = async () => {
    const adminData = {
      adminName: adminName,
      password: password
    }
    if (adminName === '') {
      toast.warning('Please enter your username');
      return null;
    }
    if (password === '') {
      toast.warning('Please enter your password');
      return null;
    }
    await axios.post('http://localhost:3000/admin/login', adminData).then((response) => {
      console.log(response.data)
      if (response.data.status === 'success') {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.reload()
        setLoggedIn(true);
      }else{
        toast.warning(response.data.message);
      }
    }).catch((error)=>{
      console.log(error)
      toast.warning("Something went wrong");
    })
  }
  useEffect(()=>{
  if (loggedIn) {
      return <Navigate to="/" />;
    }
  },loggedIn)
  
  return (
    <div className="login-page">
      <div class="cover">
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={(e) => setAdminName(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <div className="login-btn" onClick={handleLogin}>Login</div>
        <p className="text" hidden>Or Login using </p>
        <div className="alt-login" hidden>
          <div className="facebook" hidden></div>
          <div className="google" hidden></div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
