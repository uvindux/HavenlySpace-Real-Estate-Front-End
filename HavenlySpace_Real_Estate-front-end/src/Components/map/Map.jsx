import React from 'react';
import './Map.scss';

const Map = ({ lat, lng, items }) => {
          const firstItem = items && items.length ? items[0] : null;
          const resolvedLat = lat ?? firstItem?.latitude ?? firstItem?.lat ?? null;
          const resolvedLng = lng ?? firstItem?.longitude ?? firstItem?.lng ?? null;

          return (
                    <div className="map-placeholder">
                              <div style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#e0e0e0',
                                        borderRadius: '8px',
                                        color: '#555',
                                        fontSize: '1.1rem',
                                        minHeight: '200px',
                                        gap: '6px',
                              }}>
                                        <strong>Map Preview</strong>
                                        {resolvedLat && resolvedLng ? `Lat: ${resolvedLat}, Lng: ${resolvedLng}` : 'No coordinates'}
                              </div>
                    </div>
          );
};

export default Map;
