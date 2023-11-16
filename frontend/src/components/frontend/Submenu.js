import { Link } from "react-router-dom";

function Submenu(props) {
  return (
    <>
      {props.children.map((subitem, key) => {
        return (
          <li className="nav-item" key={key}>
            <Link to={subitem.path} className="nav-link text-small pb-0">
              {subitem.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default Submenu;
