{!showPopup && 
    <Marker 
        longitude={props.longitude} 
        latitude={props.latitude} 
        anchor="bottom" 
        onClick={handleDisplayPopup}
    >
</Marker>}

{showPopup && 
    <Popup 
        longitude={props.longitude} 
        latitude={props.latitude} 
        onClose={handleClosePopup}
        anchor="bottom"
    >
        <img src={props.image} alt="service"></img>
        <h3>{props.name}</h3>
        <p>{props.street} {props.streetNr}</p>
        <p>{props.complement}</p>
        <p>{props.email}</p>
        <p>{props.website}</p>
        <p>{props.phone}</p>
        <p>Berlin {props.zip}</p>
        {/*<Link>View details</Link>*/}        
</Popup>}