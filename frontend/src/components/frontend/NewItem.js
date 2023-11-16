import { Link } from "react-router-dom";
import urlImage from "../../config";

function NewItem(props) {
  return (
    <div className="col-md-3 col-sm-6">
      <article className="card card-post rounded-lg border">
        <Link to={`/post-detail/${props.topic.slug}/${props.item.slug}`}>
          <img
            src={`${urlImage}post/${props.item.image}`}
            className="card-img-top rounded-top"
            alt={props.item.title}
          />
        </Link>
        <div className="card-body">
          <Link to={`/post-detail/${props.topic.slug}/${props.item.slug}`}>
            <h6 className="title">{props.item.title}</h6>
            <p className="small text-uppercase text-muted">
              {props.topic.name}
            </p>
          </Link>
        </div>
      </article>{" "}
      {/* card.// */}
    </div>
  );
}

export default NewItem;
