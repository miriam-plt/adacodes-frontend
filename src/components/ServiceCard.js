import { Link } from "react-router-dom";
 
function ServiceCard ( { name, category, street, streetNr, complement, zip, website, email, phone, description, picture, date, time, _id, isApproved } ) {

    return (
        <div className="ServiceCard card">
          <Link to={`/service/${_id}`}>
            <h3>{name}</h3>
          </Link>
          <p style={{ maxWidth: "400px" }}>{description} </p>
        </div>
      );
    }

export default ServiceCard;