import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { openMenu } from '../../redux/menu'
import { toggleTheme } from '../../redux/menu'

import "../../Components/GlobalStyle.css"

import profile1 from "../../Assets/profile-1.jpg"
import profile2 from "../../Assets/profile-2.jpg"
import profile3 from "../../Assets/profile-3.jpg"
import profile4 from "../../Assets/profile-4.jpg"

/**
 * @desc This function component is used to display right section...
 * @param {*} param0 
 * @returns {*} DOM
 */
const RightSection = ({ dashboardData }) => {
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();
    return (
        <div className='right'>
            <div className="top">
                <button id='menu-btn' onClick={() => dispatch(openMenu())}>
                    <span className="material-icons-sharp">menu</span>
                </button>
                <div className="theme-toggler" onClick={() => dispatch(toggleTheme())}>
                    <span className={`material-icons-sharp ${menu.themeToggler === false ? "active" : ""}`}>light_mode</span>
                    <span className={`material-icons-sharp ${menu.themeToggler === false ? "" : "active"}`}>dark_mode</span>
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Gagan</b></p>
                        <small className='text-muted'>Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src={profile1} alt="" />
                    </div>
                </div>
            </div>

            {/* END OF TOP */}

            <div className="recent-updates">
                <h2>Recent Users</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile2} alt="" />
                        </div>
                        <div className="message">
                            {dashboardData ? <p><b>{dashboardData.recentUsers[0].username}</b> Opened an account on the app just now.</p> : ""}
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>

                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile3} alt="" />
                        </div>
                        <div className="message">
                            {dashboardData ? <p><b>{dashboardData.recentUsers[1].username}</b> Opened an account on the app just now.</p> : ""}
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>

                    <div className="update">
                        <div className="profile-photo">
                            <img src={profile4} alt="" />
                        </div>
                        <div className="message">
                            {dashboardData ? <p><b>{dashboardData.recentUsers[2].username}</b> Opened an account on the app just now.</p> : ""}
                            <small className='text-muted'>2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sales-analytics">
                <h2>Users Analytics</h2>
                <div className="item online">
                    <div className="icon">
                        <span className="material-icons-sharp">shopping_cart</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>ONLINE USERS</h3>
                            <small className='text-muted'>Last 24 Hours</small>
                        </div>
                        <h5 className='success'>+39%</h5>
                        {dashboardData ? <h3>{dashboardData.onlineUsers}</h3> : ""}
                    </div>
                </div>

                <div className="item ofline">
                    <div className="icon">
                        <span className="material-icons-sharp">local_mall</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>OFFLINE USERS</h3>
                            <small className='text-muted'>Last 24 Hours</small>
                        </div>
                        <h5 className='danger'>-17%</h5>
                        {dashboardData ? <h3>{dashboardData.totalUsers - dashboardData.onlineUsers}</h3> : ""}
                    </div>
                </div>

                <div className="item customers">
                    <div className="icon">
                        <span className="material-icons-sharp">person</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>ALL USERS</h3>
                            <small className='text-muted'>Last 24 Hours</small>
                        </div>
                        <h5 className='success'>+25%</h5>
                        {dashboardData ? <h3>{dashboardData.totalUsers}</h3> : ""}
                    </div>
                </div>

                {/* Add a new product */}
                <div className='item add-product'>
                    <div>
                    <span className="material-icons-sharp">add</span>
                    <h3>Add Product</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSection
