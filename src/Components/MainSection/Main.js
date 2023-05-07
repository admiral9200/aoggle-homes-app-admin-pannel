import React, { useState } from 'react'
import "../../Components/GlobalStyle.css"


function Main({ dashboardData }) {
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
    return (
        <main>
            <h1>Dashboard</h1>
            <div className="date">
                <input type="date" id="myDate" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="insights">
                <div className="sales">
                    <span class="material-icons-sharp">analytics</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Posts/ Videos</h3>
                            <h1>{dashboardData ? dashboardData.totalVideos : ""}</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small className='text-muted'>Last 24 hous</small>
                </div>
                {/* END OF SALES */}

                <div className="expenses">
                    <span class="material-icons-sharp">bar_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Approved Videos</h3>
                            <h1>{dashboardData ? dashboardData.approvedVideos : ""}</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div className="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small className='text-muted'>Last 24 hous</small>
                </div>
                {/* END OF expenses */}

                <div className="income">
                    <span class="material-icons-sharp">stacked_line_chart</span>
                    <div className="middle">
                        <div className="left">
                            <h3>Unapproved Videos</h3>
                            <h1>{dashboardData ? dashboardData.unapprovedVideos : ""}</h1>
                        </div>
                        <div className="progress">
                            <svg>
                                <circle cx='38' cy='38' r='36'></circle>
                            </svg>
                            <div className="number">
                                <p>44%</p>
                            </div>
                        </div>
                    </div>
                    <small className='text-muted'>Last 24 hous</small>
                </div>
                {/* END OF INCOME */}
            </div>

            {/* END OF INSIGHTS */}

            <div className="recent-orders">
                <h2>Recent Posts</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Post owner name</th>
                            <th>Time</th>
                            <th>Video Duration</th>
                            <th>Approved</th>
                            <th></th>
                        </tr>
                    </thead>
                   {dashboardData ? <tbody>
                        {dashboardData.recentPosts.map((item, index) => (
                            <tr>
                                <td>{item.postOwnerName}</td>
                                <td>{item.time}</td>
                                <td>{item.videoData.duration/1000}</td>
                                <td className={item.permission ? "success" : "warning"}>{item.permission ? "true" : "false"}</td>
                                <td className='primary'>Details</td>
                            </tr>
                        ))}
                    </tbody> : "" }
                </table>
                <a href="/">Show All</a>
            </div>
        </main>
    )
}

export default Main
