import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

function Card({item}) {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='ImageContainer'>
        <img src={item.img} alt="" />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        <p className='address'>
          <span>{item.address}</span>
        </p>

        <div className="price">
          <span>£{item.price}</span>
          {item.type === 'Rent' && <span>/month</span>}
        </div>

        <div className="details">
          <span>{item.bedRooms} Beds</span>
          <span>{item.bathRooms} Baths</span>
          <span>{item.area || 1200} sqft</span>
        </div>
      </div>
    </div>

  )
}

export default Card
