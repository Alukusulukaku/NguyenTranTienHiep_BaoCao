import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import topicservice from "../../../services/TopicService";
import postservice from "../../../services/PostService";
import NewItem from "../../../components/frontend/NewItem";

function NewList() {
  const { slug } = useParams("slug");
  const { page } = useParams("page");
  const [topics, setTopics] = useState([]);
  const [posts, setPosts] = useState([]);
  const [total_posts, setTotal_Posts] = useState([]);
  const limit = 8;
  const [total_pages, setTotal_Pages] = useState([]);
  const [posts_length, setPostlength] = useState(0);
  const [totalpost_length, setTotalPostlength] = useState(0);

  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await topicservice.all();
        setTopics(result.data.data);
      }
      fetchItems();
    }, 120);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await postservice.post_list(slug, limit, page);
          setPosts(result.data.data);
          setTotal_Posts(result.data.total_data);

          setTotal_Pages(result.data.total_page);
          try {
            setPostlength(result.data.data.length);
            setTotalPostlength(result.data.total_data.length);
          } catch {
            setPostlength(0);
            setTotalPostlength(0);
          }
        }
        fetchItems();
      }, 150);
      return () => clearTimeout(delayDebounceFn);
    },
    [page, slug]
  );
  const pageNumbers = Array.from(
    { length: total_pages },
    (_, index) => index + 1
  );

  return (
    <section className="section-content padding-y">
      <div className="container">
        {/* ============================  FILTER TOP  ================================= */}
        <div className="card mb-3">
          <div className="card-body">
            <ol className="breadcrumb float-left">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className={`breadcrumb-item active`}>
                <Link to="#">{slug !== "all" ? slug : "All news"}</Link>
              </li>
            </ol>
          </div>{" "}
          {/* card-body .// */}
        </div>{" "}
        {/* card.// */}
        {/* ============================ FILTER TOP END.// ================================= */}
        <div className="row">
          <aside className="col-md-2">
            <article className="filter-group">
              <h6 className="title">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_1"
                >
                  Topic
                </Link>
              </h6>
              <div className="filter-content collapse show" id="collapse_1">
                <div className="inner">
                  <ul className="list-menu">
                    <li
                      className={slug === "all" ? "tw-pointer-events-none" : ""}
                    >
                      <Link to={`/news/all/1`}>All news</Link>
                    </li>
                    {topics.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={
                            slug === item.slug ? "tw-pointer-events-none" : ""
                          }
                        >
                          <Link to={`/news/${item.slug}/1`}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>{" "}
                {/* inner.// */}
              </div>
            </article>
          </aside>
          {/* col.// */}
          <main className="col-md-10">
            <header className="mb-3">
              <div className="form-inline">
                <strong className="mr-md-auto">
                  {total_posts != null
                    ? total_posts.length + " news found"
                    : ""}
                </strong>
              </div>
            </header>
            <div className="row row-sm">
              {posts != null
                ? posts.map((item, index) => {
                    return (
                      <NewItem item={item} topic={item.topic} key={index} />
                    );
                  })
                : "No posts to display"}
            </div>
            {/* card-product .// */}
            <nav className="mb-4 mt-4" aria-label="Page navigation sample">
              <ul className="pagination">
                {totalpost_length !== 0 ? (
                  <li
                    className={`page-item ${
                      parseInt(page) === 1 ? "disabled" : ""
                    }`}
                  >
                    <Link className="page-link" to="#">
                      Previous
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {pageNumbers.map((page, index) => {
                  return (
                    <li
                      className={`page-item ${
                        index + 1 === parseInt(page) ? "active" : ""
                      }`}
                      key={index}
                    >
                      <Link className="page-link" to={`/news/${slug}/${page}`}>
                        {page}
                      </Link>
                    </li>
                  );
                })}
                {totalpost_length !== 0 ? (
                  <li
                    className={`page-item ${
                      (parseInt(page) - 1) * limit + posts_length ===
                      totalpost_length
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <Link className={`page-link`} to="#">
                      Next
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </nav>
          </main>{" "}
          {/* col.// */}
        </div>
      </div>{" "}
      {/* container .//  */}
    </section>
  );
}

export default NewList;
