import React from 'react'
import './Filter.scss'

function Filter() {
  return (
    <div className="filter">
      <h1>Search results for <b>London</b></h1>

      <div className="top">
        <div className="item">
          <label>Location</label>
          <input type="text" placeholder="City Location" />
        </div>
      </div>

      <div className="bottom">
        <div className="item">
          <label>Type</label>
          <select>
            <option>any</option>
            <option>Buy</option>
            <option>Rent</option>
          </select>
        </div>

        <div className="item">
          <label>Property</label>
          <select>
            <option>any</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
            <option>Land</option>
          </select>
        </div>

        <div className="item">
          <label>Min Price</label>
          <input type="number" placeholder="any" />
        </div>

        <div className="item">
          <label>Max Price</label>
          <input type="number" placeholder="any" />
        </div>

        <div className="item">
          <label>Bedroom</label>
          <input type="text" placeholder="Any" />
        </div>

        <button className="SearchButton">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>

  )
}

export default Filter
