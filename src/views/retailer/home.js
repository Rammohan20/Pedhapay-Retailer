import React from 'react'
import Sidenav from '../../components/shared/Sidenav'
import TopBar from '../../components/shared/TopBar'

function Home() {
  return (
    <>
      <TopBar />
      <Sidenav />
      <div className='page-wrapper'>
          <div className='home-section'>
            <h1>Dashbaord</h1>
          </div>
        </div>
    </>
  )
}

export default Home