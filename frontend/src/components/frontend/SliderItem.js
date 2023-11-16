import { Link } from "react-router-dom";
import urlImage from "../../config";

function SliderItem(props) {
  return (
    <div
      className={`carousel-item ${props.location === 0 ? "active" : ""}`}
      key={props.index}
    >
      <img
        src={`${urlImage}slider/${props.item.image}`}
        alt={props.item.name}
        className="slider-image"
      />
      <div className="carousel-caption text-white text-left padding-bottom">
        <h1 className="slider-text display-4" style={{ fontWeight: "bold" }}>
          {props.item.name}
        </h1>
        <Link
          to={props.item.path}
          className="btn btn-warning w-25 padding-y-sm"
        >
          {" "}
          Shop now{" "}
        </Link>
      </div>
    </div>
  );
}

export default SliderItem;
