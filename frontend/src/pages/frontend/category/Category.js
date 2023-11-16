import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
import urlImage from "../../../config";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result1 = await categoryservice.getAllWithChildren();
        setCategories(result1.data.data);
      }
      fetchItems();
    }, 250);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  return (
    <section className="section-content padding-y">
      <div className="container">
        <nav className="row">
          {categories.map((item, category) => {
            if (item.parent_id === 0) {
              return (
                <div className="col-md-3" key={category}>
                  <div className="card card-category">
                    <div className="img-wrap" style={{ background: "#ffffff" }}>
                      <img src={`${urlImage}category/${item.image}`} alt="" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <Link to={`/category/${item.slug}/all/1`}>
                          {item.name}
                        </Link>
                      </h4>
                      <ul className="list-menu">
                        {item.children.length !== 0
                          ? item.children.map((subitem, subcat) => {
                              return (
                                <li key={subcat}>
                                  <Link
                                    to={`/category/${item.slug}/${subitem.slug}/1`}
                                  >
                                    {subitem.name}
                                  </Link>
                                </li>
                              );
                            })
                          : ""}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            } else {
              return "";
            }
          })}
        </nav>
        {/* row.// */}
      </div>
      {/* container .//  */}
    </section>
  );
}

export default Category;
