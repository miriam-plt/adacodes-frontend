import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from "react";
mapboxgl.accessToken = "pk.eyJ1Ijoia3lvdG9zbmciLCJhIjoiY2l2b2ZzajQxMDBzbTJvbXVxanQzZWFhNSJ9.SvyFm-_4BuWzYGL7OaQkcQ"

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(13.3888599);
    const [lat, setLat] = useState(52.5170365);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; 
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}
export default Map;