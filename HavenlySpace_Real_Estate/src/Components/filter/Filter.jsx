import React from 'react'
import './Filter.scss'

function Filter() {
  return (
    <div>
      <h1>Search Results for <b>London</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder='Cyty location' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <select name="type" id="type">
            <option value="Any">Any</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>

          </select>
        </div>
        <div className="item">
          <label htmlFor="Property">Property</label>
          <select name="Property" id="propery">
            <option value="Any ">Any</option>
            <option value="Apartment ">Apartment</option>
            <option value="House">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>

          </select>
        </div>
        <div className="item">
          <label htmlFor="minprice">Min Price</label>
          <input type="number" id="minprice" name="Minprice" placeholder='Min Price' />
        </div>
        <div className="item">
          <label htmlFor="city">Max Price</label>
          <input type="text" id="MaxPrice" name="MaxPrice" placeholder='Max Price' />
        </div>
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="city" placeholder='Cyty location' />
        </div>

        <button className='SearchButon'>Search</button>

      </div>
    </div>
  )
}

export default Filter
