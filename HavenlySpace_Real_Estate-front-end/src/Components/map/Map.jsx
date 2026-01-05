import React from 'react';
import './Map.scss';

const Map = ({ lat, lng }) => {
          return (
                    <div className="map-placeholder">
                              <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#e0e0e0',
                                        borderRadius: '8px',
                                        color: '#555',
                                        fontSize: '1.2rem',
                                        minHeight: '200px',
                              }}>
                                        Map Placeholder<br />
                                        {lat && lng ? `Lat: ${lat}, Lng: ${lng}` : 'No coordinates'}
                              </div>
                    </div>
          );
};

export default Map;
