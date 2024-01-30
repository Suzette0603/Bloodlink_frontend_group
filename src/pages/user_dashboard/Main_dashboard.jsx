import React from 'react'
import Side_bar from '../../components/Side_bar'
import { Outlet } from 'react-router-dom'
import Top_bar from '../../components/Top_bar'

const Main_dashboard = () => {
  return (
   <>
    <div style={{ display: 'flex' }}>
        <Side_bar />
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Top_bar />
            <Outlet />
        </div>
    </div>
   </>
  )
}

export default Main_dashboard