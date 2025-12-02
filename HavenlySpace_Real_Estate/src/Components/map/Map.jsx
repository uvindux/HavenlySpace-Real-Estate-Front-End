import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './Map.scss'
import Pin from '../pin/Pin.jsx';

function Map({ items }) {
          return (
                    <div className='map'>
                              <MapContainer
                                        center={[51.505, -0.09]}
                                        zoom={6}
                                        scrollWheelZoom={false}
                                        className='mapContainer'
                              >
                                        <TileLayer
                                                  attribution='&copy; OpenStreetMap contributors'
                                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        {items?.map((item) => (
                                                  <Pin key={item.id} item={item} />
                                        ))}

                              </MapContainer>
                    </div>
          )
}

export default Map
