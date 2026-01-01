import React from 'react'
import Listdata from '../../lib/DummyData'
import Card from '../card/Card'

function List() {
  return (
            <div className='list'>
                      
                      {Listdata.map((item) => (
                                <Card key={item.id} item={item} />
                      ))}
                        
      
    </div>
  )
}

export default List
