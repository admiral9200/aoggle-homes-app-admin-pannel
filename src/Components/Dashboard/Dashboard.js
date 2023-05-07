import React from 'react'
import Main from '../MainSection/Main'
import RightSection from '../RightSection/RightSection'

function Dashboard({dashboardData}) {
  return (
    <>
    <Main dashboardData={dashboardData}/>
    <RightSection dashboardData={dashboardData}/>
    </>
  )
}

export default Dashboard
