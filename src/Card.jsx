import starLogo from "./images/main-images/star.png";
import ellipse from "./images/main-images/ellipse.png";

export default function Card(props) {
  return (
    <li className="lesson">
      <img className="main-image" src={props.image} />
      <div className="rating-and-location-container">
        <img src={starLogo} className="star" />
        <p>{props.rating}</p>
        <span>
          <p>({props.comments})</p>
          <img src={ellipse} />
          <p>{props.location}</p>
        </span>
      </div>
      <div className="lesson-title-container">
        <p>{props.title}</p>
      </div>
      <p>
        <span className="price-section">From ${props.price} </span>/ person
      </p>
      <div className="batch">
        {!props.seatsRemaining ? (
          <p>SOLD OUT</p>
        ) : (
          <p>{props.seatsRemaining} AVAILABLE</p>
        )}
      </div>
    </li>
  );
}
