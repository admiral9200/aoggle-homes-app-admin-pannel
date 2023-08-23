import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "../table.css"

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const AllPosts = ({ dashboardData }) => {
    const handleApprovePost = async (item) => {
        const data = {
            postId: item._id
        }

        if (item.permission === false) {
            try {
                await axios.post("http://localhost:3000/admin/set-approved", data).then((response) => {
                    console.log(response)
                    if (response.data.status === 'success') {
                        // toast.success(response.data.message);
                        window.location.reload()
                        return null;
                    } else {
                        toast.error(response.data.message);
                        return null;
                    }
                })
            } catch (error) {
                toast.error("Something went wrong");
                console.log(error)
                return null;
            }
        } else {
            try {
                await axios.post("http://localhost:3000/admin/set-unapproved", data).then((response) => {
                    console.log(response)
                    if (response.data.status === 'success') {
                        // toast.success(response.data.message);
                        window.location.reload()
                        return null;
                    } else {
                        toast.error(response.data.message);
                        return null;
                    }
                })
            } catch (error) {
                toast.error("Something went wrong");
                console.log(error)
                return null;
            }
        }
    }


    const handleRemovePost = async (item) => {
        const data = {
            postId: item._id
        }
        try {
            await axios.post("http://localhost:3000/admin/delete-post", data).then((response) => {
            if(response.data.status === 'success'){
                window.location.reload()
                // toast.success(response.data.message);
                return null;
            }else{
                toast.success(response.data.message);
            }
            })
        } catch (error) {

        }
    }
    return (
        <div className='table-main'>
            <div className="allpost-table">
                <table>
                    <tr>
                        <th>Sl No.</th>
                        <th>Post ID</th>
                        <th>Owner Name</th>
                        <th>Time</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Status</th>
                    </tr>
                    {dashboardData && dashboardData.allPosts.length > 0 ?
                        dashboardData.allPosts.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item._id}</td>
                                <td>{item.postOwnerName}</td>
                                <td>{item.time}</td>
                                <td>{item.currentLocation.coords.latitude}</td>
                                <td>{item.currentLocation.coords.longitude}</td>
                                <td>{item.permission ? "approved" : "not approved"}</td>
                                <td>{item.permission ? <button onClick={()=>handleApprovePost(item)}>Unapprove</button> : <button onClick={()=>handleApprovePost(item)}>Approve</button>}</td>
                                <td><button onClick={()=>handleRemovePost(item)}>Remove</button></td>
                            </tr>
                        ))
                        : ""}
                </table>
            </div>
        </div>
    )
}

export default AllPosts
