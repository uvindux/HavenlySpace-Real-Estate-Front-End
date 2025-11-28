import React from 'react'
import Listdata from '../../lib/DummyData'
import Filter from '../../Components/filter/Filter';

function ListPage() {
          const Data = Listdata;
  return (
            <div>
                      <div className="filterComponent">
                                <div className="wrapper">
                                          <Filter/>
                                          
                                </div>
                      </div>
                      <div className="mapComponent"></div>
      
    </div>
  )
}

export default ListPage
