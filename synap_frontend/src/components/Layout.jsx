import React from 'react'

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
     <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow ">
        <Outlet /> {/* Renders page content */}
      </main>
     
    </div>
  )
}

export default Layout