import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function pin({item}) {
  return (
            <div>
                      <Marker position={[item.latitude, item.longitude]}>
                                <Popup>
                                          <div className="PopupContainer">
                                                    <img src={item.image} alt={item.title} srcset="" />
                                                    <div className="textContainer">
                                                              <Link to={`/${item.id}`} className='title'>{item.title}</Link>
                                                              <p className='address'>{item.address}</p>
                                                              <div className="price">£{item.price}{item.type === 'Rent' && <span>/month</span>}</div>
                                                              
                                                    </div>

                                         </div>
                                </Popup>
                      </Marker>
      
    </div>
  )
}

export default pin
