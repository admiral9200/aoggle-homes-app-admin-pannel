import Sidebar from "./Components/Sidebar/Sidebar";
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from 'axios';

import "./Components/GlobalStyle.css"
import Dashboard from "./Components/Dashboard/Dashboard";
import ShowPosts from "./Components/ShowPosts/ShowPosts";
import Login from "./Components/Login/Login";
import AllPosts from "./Components/AllPosts/AllPosts";
import AllUsers from "./Components/AllUsers/AllUsers";


const App = () => {
  // getting menu info...
  const menu = useSelector((state) => state.menu);

  // state of logging in...
  const [loggedIn, setLoggedIn] = useState(false);

  // observing state of the whole project...
  const [allSet, setAllSet] = useState(false);

  // getting all data for dashboard...
  const [dashboardData, setDashboardData] = useState();

  // when first rendering, getting token from local storage....
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        console.log(currentTime);
        if (decodedToken.exp < currentTime) {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
        }
      } catch (error) {
        setLoggedIn(false);
      }
    } else {
      setLoggedIn(true);
    }
    setAllSet(true)
  }, []);

  const getDashboardData = async () => {
    await axios.get("http://localhost:3000/admin/get-dashboard-data").then((response) => {
      setDashboardData(response.data)
    })
  }

  // useEffect(() => {
  //   getDashboardData()
  // },[])

  // toggling for style - black or white...
  if (menu.themeToggler === false) {
    document.body.className = "";
  } else {
    document.body.className = "dark-theme-variables";
  }

  return (
    <BrowserRouter>
      <div className="container">
        {loggedIn ? <Sidebar dashboardData={dashboardData} /> : ""}
        {allSet ? <Routes>
          <Route path="/" element={!loggedIn ? <Navigate to="/login" /> : <Dashboard dashboardData={dashboardData} />} />
          <Route path="/login" element={!loggedIn ? <Login /> : <Navigate to="/" />} />
          <Route path="/posts" element={<ShowPosts dashboardData={dashboardData} />} />
          <Route path="/all-posts" element={<AllPosts dashboardData={dashboardData} />} />
          <Route path="/all-users" element={<AllUsers dashboardData={dashboardData} />} />
        </Routes> : ""}
      </div>
    </BrowserRouter>
  );
}

export default App;
