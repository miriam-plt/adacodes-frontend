import { Link } from "react-router-dom";
 
function ServiceCard ( { name, category, street, streetNr, complement, zip, website, email, phone, description, picture, date, time, _id, isApproved } ) {

    return (
        <div className="ServiceCard card">
          <Link to={`/service/${_id}`}>
            <h2>{name}</h2>
          </Link>
          <p style={{ maxWidth: "400px" }}>{description} </p>
          <Link to={`/service/${_id}`}>View details 👉</Link>
        </div>
      );
    }

export default ServiceCard;