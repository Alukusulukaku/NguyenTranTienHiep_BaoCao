import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postservice from "../../../services/PostService";
import NewItem from "../../../components/frontend/NewItem";

function NewDetail() {
  const { topic } = useParams("topic");
  const { slug } = useParams("slug");
  const [post, setPost] = useState([]);
  const [post_other, setPost_Other] = useState([]);
  const [user, setUser] = useState("");
  //--------------------------

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result1 = await postservice.post_detail(topic, slug);
          setPost(result1.data.data);
          setPost_Other(result1.data.data_other);
          setUser(result1.data.data.user.name);
        }
        fetchItems();
      }, 500);
      return () => clearTimeout(delayDebounceFn);
    },
    [slug, topic]
  );

  return (
    <>
      <section className="section-content padding-y bg-white">
        <div className="container">
          <div>
            <h1>{post.title}</h1>
            <h6>Người viết: {user}</h6>
          </div>
          <br />
          <div
            className="row"
            dangerouslySetInnerHTML={{ __html: post.detail }}
          ></div>
        </div>
      </section>
      <div className="container">
        <section className="padding-bottom-sm">
          <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Read more</h4>
          </header>
          <div className="row row-sm">
            {post_other.map((item, index) => {
              return <NewItem item={item} topic={item.topic} key={index} />;
            })}
          </div>{" "}
          {/* row.// */}
        </section>
      </div>
    </>
  );
}

export default NewDetail;
