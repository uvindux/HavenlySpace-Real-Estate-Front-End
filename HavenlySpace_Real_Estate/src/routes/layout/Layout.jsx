import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Layout.scss'
import { Outlet } from 'react-router-dom'

function Layout() {
          return (
                    <div>
                              <div className='layout'>
                                        <div className="Navbar">
                                                  <Navbar/>
                                        </div>
                                        <div className="Content">
                                                 {/* Render the matched child route here */}
                                                  <Outlet/>
                                                 
                                        </div>

                              </div>



                    </div>
          )
}

export default Layout
