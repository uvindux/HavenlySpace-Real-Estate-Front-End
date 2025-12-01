import React from 'react'
import Listdata from '../../lib/DummyData'
import Filter from '../../Components/filter/Filter';
import Card from '../../Components/card/Card';

function ListPage() {
  const Data = Listdata;
  return (
    <div>
      <div className="filterComponent">
        <div className="wrapper">
          <Filter/>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapComponent"></div>

    </div>
  )
}

export default ListPage
