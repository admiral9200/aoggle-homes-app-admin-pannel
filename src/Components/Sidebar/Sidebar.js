import React,{useEffect, useState} from 'react'
import logo from '../../Assets/logo.png'
import { useDispatch ,useSelector} from 'react-redux'
import { openMenu } from '../../redux/menu'
import "../../Components/GlobalStyle.css"
import { useLocation } from 'react-router-dom';
function Sidebar({dashboardData}) {
    const location = useLocation();
    const [dashboard,setDashboard]= useState('')
    const [unapproved,setUnapproved] = useState('')
    const [allPosts,setAllPosts] = useState('');
    const [allUsers,setAllUsers] = useState('');

    console.log(location.pathname)

    useEffect(()=>{
        if(location.pathname==='/'){
            setAllPosts('')
            setAllUsers('')
            setUnapproved('')
            setDashboard('active')
        }
        if(location.pathname==='/posts'){
            setAllPosts('')
            setAllUsers('')
            setDashboard('')
            setUnapproved('active')
        }
        if(location.pathname==='/all-posts'){
            setAllPosts('active')
            setAllUsers('')
            setDashboard('')
            setUnapproved('')
        }
        if(location.pathname==='/all-users'){
            setAllPosts('')
            setAllUsers('active')
            setDashboard('')
            setUnapproved('')
        }
    })

    const menu = useSelector((state)=>state.menu)
    const dispatch = useDispatch()

    return (
        <aside className={menu.menuOpen ? 'open' : ''}>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h2>Aoggle<span className='danger'>Homes</span></h2>
                </div>
                <div className="close" id='close-btn' onClick={()=>dispatch(openMenu())}>
                    <span class="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                <a href="/" className={dashboard}>
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="/posts" className={unapproved}> 
                    <span class="material-icons-sharp">person_outline</span>
                    <h3>Unapproved</h3>
                    <span className='message-count'>{dashboardData ? dashboardData.unapprovedVideos : ""}</span>
                </a>
                <a href="/all-posts" className={allPosts}>
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>All Posts</h3>
                    <span className='message-count'>{dashboardData ? dashboardData.totalVideos : ""}</span>
                </a>
                <a href="/all-users" className={allUsers}>
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>All Users</h3>
                    <span className='message-count'>{dashboardData ? dashboardData.totalUsers : ""}</span>
                </a>
                <a href="/">
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>Messages</h3>
                    
                </a>
                <a href="/">
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>Products</h3>
                </a>
                <a href="/">
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar
