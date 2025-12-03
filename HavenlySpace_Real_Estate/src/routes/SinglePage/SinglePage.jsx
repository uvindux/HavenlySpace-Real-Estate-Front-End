import React from 'react'
import Slider from '../../Components/slider/Slider'
import { SinglepostsData } from '../../lib/DummyData'
import { UserData } from '../../lib/DummyData'
import Map from '../../Components/map/Map'
function SinglePage() {
 
  return (
    <div>
      <div className="singlePage">
        <div className="details">
          <div className="wrapper">
            <Slider images={SinglepostsData[0].images} />

          </div>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{SinglepostsData[0].title}</h1>
              </div>
              <div className="address">
                <span>{SinglepostsData[0].address}</span>

              </div>
              <div className="price">
                <span>£{SinglepostsData[0].price}</span>
              </div>
            </div>
            <div className="User">
              <div className="userImage">
                <img src={UserData[0].img} alt="" />
              </div>
              <div className="userName"><span>{ UserData[0].name}</span></div>
             

            </div>
            <div className="bottom">
              {SinglepostsData[0].description} 
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper">
            <p className="title">
              General
            </p>
            <div className="listVertical"></div>
            <p className="title">
              Sizes
            </p>
            <div className="sizes"></div>
            <p className="title">Near by Places</p>
            <div className="listHorizontol"></div>
            <p className="title">Location</p>
            <div className="mapContainer">
              <Map/>
            </div>
            <div className="buttons">
              <button>Send a message</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default SinglePage
