import React, { useState } from 'react'
import "./SearchBar.scss";

function SearchBar() {
          const types = ["Buy", "Rent"];
          const [query, setquery] = useState({
                    type: "Buy",
                    location: "",
                    minPrice: "",
                    maxPrice: ""
          });

          const SwitchType = (val) => {
                    setquery(prev => ({ ...prev, type: val }));
          };

          return (
<div>
                    <div className="type">
                              {types.map((type) => (
                                        <button
                                                  key={type}
                                                  onClick={() => SwitchType(type)}
                                                  className={query.type === type ? "active" : ""}
                                        >
                                                  {type}
                                        </button>
                              ))}
                    </div>
    

                    <form action="">
                              <input type="text" name='location' placeholder='CityLocation' />
                              <input type="number " name='MinPrice' min={0} max={10000} placeholder='Min Price' />
                              <input type="number" name='MaxPrice' min={0} max={10000} placeholder='Max Price' />
                              <button>Search</button>
                    </form>
                    </div >
          )
}

export default SearchBar