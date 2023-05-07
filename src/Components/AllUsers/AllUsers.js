import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AllUsers({dashboardData}) {
  return (
    <div className='table-main'>
            <div className="allpost-table">
                <table>
                    <tr>
                        <th>Sl No.</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Mobile number</th>
                    </tr>
                    {dashboardData && dashboardData.allUsers.length > 0 ?
                        dashboardData.allUsers.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item._id}</td>
                                <td>{item.username}</td>
                                <td>{item.mobileNumber}</td>
                            </tr>
                        ))
                        : ""}
                </table>
            </div>
        </div>
  )
}

export default AllUsers
