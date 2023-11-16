import React, { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import NewItem from "../../../components/frontend/NewItem";

function News() {
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await postservice.postByLimit(limit);
          setNews(result.data.data);
        }
        fetchItems();
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    },
    [limit]
  );

  return (
    <div className="container">
      <section className="padding-bottom">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">News</h4>
        </header>
        <div className="row">
          {news.map((item, index) => {
            return <NewItem item={item} topic={item.topic} key={index} />;
          })}
        </div>
        {/* row.// */}
        <div className="col-md-12 d-flex justify-content-center">
          {limit <= news.length && news.length >= 4 ? (
            <button
              onClick={() => setLimit(limit + 4)}
              className="btn btn-block btn-warning w-50"
            >
              <i className="fa fa-plus"></i> More...{" "}
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default News;
