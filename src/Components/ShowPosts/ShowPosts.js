import React from 'react'
import RightSection from '../RightSection/RightSection'
import VideoList from '../VideoList/VideoList'

function ShowPosts({dashboardData}) {
  return (
    <>
    <VideoList dashboardData={dashboardData}/>
    <RightSection dashboardData={dashboardData}/>
    </>
  )
}

export default ShowPosts
