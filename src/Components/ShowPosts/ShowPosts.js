import React from 'react'

import RightSection from '../RightSection/RightSection'
import VideoList from '../VideoList/VideoList'

/**
 * @desc display only the posts with right section...
 * @url /posts
 * @param {*} param0 
 * @returns {*} DOM
 */
const ShowPosts = ({dashboardData}) => {
  return (
    <>
      <VideoList dashboardData={dashboardData}/>
      <RightSection dashboardData={dashboardData}/>
    </>
  )
}

export default ShowPosts
