import React from 'react'
import './Homepage.scss'
import SearchBar from '../../Components/SeachBAr/SearchBar.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'


function Homepage() {
  return (
    <>
      
      <div className="HomePage">
      <div className="textContainer">
        <div className="Wrapper">
          <h1 className='MainHeader'>Find Real Estate & Get Your Dream Place </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus reiciendis quae, nobis nulla sed enim incidunt quam veniam rem! Non, accusamus obcaecati dolor odio atque debitis cum impedit assumenda.</p>
          <SearchBar />
          <div className="Boxes">
            <div className="Box">
            <h1 className='Number'>16+</h1>
            <h1 className='Description'>Years Of Experience</h1>
          </div>
          <div className="Box">
            <h1 className='Number'>200</h1>
            <h1 className='Description'>Awards Gained</h1>
          </div>
          <div className="Box">
            <h1 className='Number'>2000+</h1>
            <h1 className="Description">Property Ready</h1>
          </div>
          </div>
          
        </div>




      </div>

      <div className="imageContainer"><img src="/bg.png" alt="" srcset="" /></div>

    </div>
    </>
 
    
  )
}

export default Homepage