import React, { useState } from 'react'
import  Map, { Marker, Popup } from 'react-map-gl';

const MapComponent = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleDisplayPopup = (e) => { e.originalEvent.stopPropagation(); setShowPopup(!showPopup)}
    const handleClosePopup = () => {setShowPopup(!showPopup)}
    //[{long: ...., lat:...}, {long: ...., lat:...}, {long: ...., lat:...}]
  return (
    <Map
    initialViewState={{
      longitude: 13.3888599,
      latitude: 52.5170365,
      zoom: 10
    }}
    style={{width: '100vw', height: '100vh'}}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  >
    {!showPopup && <Marker longitude={13.3888599} latitude={ 52.5170365} anchor="bottom" onClick={handleDisplayPopup}>
    </Marker>}
   
      {showPopup && <Popup longitude={13.3888599} latitude={ 52.5170365} onClose={handleClosePopup}
        anchor="bottom">
        You are here
      </Popup>}
  </Map>
  )
}

export default MapComponent