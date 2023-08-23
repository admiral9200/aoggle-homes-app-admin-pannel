import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import "../GlobalStyle.css"

/**
 * @desc This function component is used to login an admin user...
 * @returns 
 */
const Login = () => {
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  /**
   * @desc This method is used to handle login...
   * @returns 
   */
  const handleLogin = async () => {
    const adminData = {
      adminName: adminName,
      password: password
    }

    // exception...
    if (adminName === '') {
      toast.warning('Please enter your username');
      return null;
    }
    if (password === '') {
      toast.warning('Please enter your password');
      return null;
    }

    // Post admin data to log in...
    await axios.post('http://localhost:3000/admin/login', adminData).then((response) => {
      if (response.data.status === 'success') {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.reload();
        setLoggedIn(true);
      } else {
        toast.warning(response.data.message);
      }
    }).catch((error) => {
      toast.warning("Something went wrong");
    })
  }
  
  // Observing login state...
  useEffect(() => {
    if (loggedIn) {
      return <Navigate to="/" />;
    }
  }, [ loggedIn ])

  return (
    <div className="login-page">
      <div className="cover">
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
