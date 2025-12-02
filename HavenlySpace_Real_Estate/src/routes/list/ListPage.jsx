import React from 'react'
import Listdata from '../../lib/DummyData'
import Filter from '../../Components/filter/Filter'
import Card from '../../Components/card/Card'
import './ListPage.scss'
import Map from '../../Components/map/Map'

function ListPage() {
  const data = Listdata; // 👈 use lowercase to match the map()

  return (
    <div className='ListPage'>
      <div className="filterComponent">
        <div className="wrapper">
          <Filter />

          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mapComponent">
        <Map item={data} />
      </div>
    </div>
  )
}

export default ListPage
