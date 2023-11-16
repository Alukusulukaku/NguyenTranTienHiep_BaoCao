import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pageservice from "../../services/PageService";
import { useEffect } from "react";

function Content() {
  const navigate = useNavigate();
  const { slug } = useParams("slug");
  const [page, setPage] = useState([]);

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await pageservice.getBySlug(slug);
          setPage(result.data.data);
        }
        fetchItems();
      }, 0);
      return () => clearTimeout(delayDebounceFn);
    },
    [slug]
  );
  return (
    <>
      <section className="section-pagetop bg-light">
        <div className="container">
          <h2 className="title-page">{page.title}</h2>
        </div>{" "}
        {/* container .// */}
      </section>
      {/* ========================= SECTION CONTENT ========================= */}
      <section className="section-content bg-white padding-y">
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: page.content }}
        ></div>{" "}
        <div className="container">
          {" "}
          <button onClick={() => navigate(-1)} className="btn btn-light">
            {" "}
            « Go back
          </button>
        </div>
        {/* container .//  */}
      </section>
    </>
  );
}

export default Content;
