import React, { useState } from "react";
import ReactMapGL from "react-map-gl"

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 52.5170365,
        longitude: 13.3888599,
        width: "100vw",
        height: "100vh",
        zoom: 10,
    });

    return (
        <div>
            <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
                markers here
            </ReactMapGL>

        </div>

    )
}

export default Map;