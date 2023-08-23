import React from 'react'
import Main from '../MainSection/Main'
import RightSection from '../RightSection/RightSection'

/**
 * @desc This function component is an entrance of Dashboard...
 * @param {*} param0 
 * @returns 
 */
const Dashboard = ({ dashboardData }) => {
  return (
    <>
      <Main dashboardData={dashboardData} />
      <RightSection dashboardData={dashboardData} />
    </>
  )
}

export default Dashboard
