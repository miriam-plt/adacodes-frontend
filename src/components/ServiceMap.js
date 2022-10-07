import  Map, { Marker, FullscreenControl, NavigationControl } from 'react-map-gl';


function ServiceMap (props) {
console.log(props)
    return (
        <div className="MapWrapper">
            <Map 
            className="ServiceMap"
            initialViewState={{
            longitude: `${props.longitude}`,
            latitude: `${props.latitude}`,
            zoom: 10
            }}
            style={{width: '100vw', height: '40vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
            <FullscreenControl />
            <NavigationControl />
            
            <Marker 
                longitude={props.longitude}
                latitude={props.latitude}  
                >

            </Marker>
       
        </Map> 
        
        </div>  
      );
    }

export default ServiceMap;