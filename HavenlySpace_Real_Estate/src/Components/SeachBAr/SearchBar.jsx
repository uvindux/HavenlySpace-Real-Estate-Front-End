import React from 'react'

function SearchBar() {
  return (
    <div>
          <div className="type">
                    <button>Buy</button>
                    <button>Rent</button>
          </div>

          <form action="">
                    <input type="text" name='location' placeholder='CityLocation' />
                    <input type="number " name='MinPrice' min={0} max={10000} placeholder='Min Price' />
                    <input type="number" name='MaxPrice' min={0} max={10000} placeholder='Max Price' />
                    <button><img src="/search.png" alt="" srcset="" /></button>
          </form>
    </div>
  )
}

export default SearchBar