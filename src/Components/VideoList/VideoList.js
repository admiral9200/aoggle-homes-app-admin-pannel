import React from "react";

import "../GlobalStyle.css"
import Video from "./Video";

/**
 * @desc This function component is used to display video list...
 * @param {*} param0 
 * @returns {*} DOM
 */
const VideoList = ({ dashboardData }) => {
  return (
    <div className="app">
      {dashboardData && dashboardData.unapprovedPosts.length > 0 ? (<div className="app_videos">
        {dashboardData.unapprovedPosts.map((item, index) => (
          <Video item={item} />
        ))}
      </div>) : (<div className="noPosts"><p className="noPostText">No unapproved posts found.</p> </div>)}
    </div>
  );
};

export default VideoList;