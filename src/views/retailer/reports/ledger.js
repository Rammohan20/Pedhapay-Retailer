import React from 'react'
import Sidenav from '../../../components/shared/Sidenav'
import TopBar from '../../../components/shared/TopBar';
import Table from '../../../components/shared/Table'
import Notification from '../../../components/dashboard/Notification';


function Ledger() {
  return (
    <>
      <TopBar />
      <Sidenav />
      <div className='page-wrapper'>
        <Notification />
        <div className='home-section'>
           <Table/>
        </div>
      </div>
    </>
  )
}

export default Ledger