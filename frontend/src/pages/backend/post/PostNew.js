import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import topicservice from "../../../services/TopicService";
import AlertContext from "../../../provider/AlertProvider";
import postservice from "../../../services/PostService";
import { useAuth } from "../../../provider/AuthProvider";

function PostNew() {
  let navigate = useNavigate();
  const { token } = useAuth();
  const [, setAlert] = useContext(AlertContext);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [metakey, setMetaKey] = useState("");
  const [metadesc, setMetaDesc] = useState("");
  const [status, setStatus] = useState(1);
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState(0);
  useEffect(function () {
    (async function () {
      await topicservice.all().then(function (result) {
        setTopics(result.data.data);
      });
    })();
  }, []);
  async function menuStore(event) {
    event.preventDefault();
    if (topic === 0) {
      setAlert({
        text: "Vui lòng chọn chủ đề!!",
        type: "failed",
      });
      return;
    }
    const image = document.querySelector("#image");
    var post = new FormData();
    post.append("title", title);
    post.append("detail", detail);
    post.append("metakey", metakey);
    post.append("metadesc", metadesc);
    post.append("topic_id", topic);
    post.append("user_id", token.id);
    if (image.files.length === 0) {
      post.append("image", "");
    } else {
      post.append("image", image.files[0]);
    }
    post.append("status", status);
    await postservice.create(post).then(function (res) {
      if (res.data.success === true) {
        setAlert({
          text: "Tạo dữ liệu thành công!",
          type: "success",
        });
      } else {
        setAlert({
          text: "Tạo dữ liệu thất bại!!",
          type: "failed",
        });
      }
      navigate("/admin/post/1");
    });
  }
  return (
    <>
      <nav
        className="tw-flex tw-px-5 tw-py-3 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded-lg tw-bg-gray-50 light:tw-bg-gray-800 light:tw-border-gray-700 tw-mb-5 tw-shadow-md"
        aria-label="Breadcrumb"
      >
        <ol className="tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
          <li className="tw-inline-flex tw-items-center">
            <Link
              to="#"
              className="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-blue-600 light:tw-text-gray-400 light:hover:tw-text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="tw-flex tw-items-center">
              <svg
                className="tw-w-3 tw-h-3 tw-mx-1 tw-text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-500 md:tw-ml-2 light:tw-text-gray-400">
                Post
              </span>
            </div>
          </li>
          <li>
            <div className="tw-flex tw-items-center">
              <svg
                className="tw-w-3 tw-h-3 tw-mx-1 tw-text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-500 md:tw-ml-2 light:tw-text-gray-400">
                New a post
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="tw-flex tw-justify-start">
        <button
          type="button"
          className="tw-flex tw-items-center focus:tw-outline-none tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
          onClick={() => navigate(-1)}
        >
          <svg
            className="tw-w-5 tw-h-5 tw-text-gray-800 dark:tw-text-white tw-me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
          Go Back
        </button>
      </div>
      <div className="tw-relative tw-overflow-x-auto tw-shadow-md tw-bg-white sm:tw-rounded-lg tw-p-10">
        <form onSubmit={menuStore} method="post">
          <div className="tw-mb-6">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter title..."
                required
              />
            </div>
          </div>
          <div className="tw-mb-6">
            <label
              className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
              htmlFor="image"
            >
              Post image
            </label>
            <input
              className="tw-block tw-w-full tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 light:tw-text-gray-400 focus:tw-outline-none light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400"
              aria-describedby="file_input_help"
              id="image"
              type="file"
              required
            />
            <p
              className="tw-mt-1 tw-text-sm tw-text-gray-500 light:tw-text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
          <div className="tw-mb-6">
            <>
              <label
                className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
                htmlFor="topic"
              >
                Topic
              </label>
              <select
                id="topic"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              >
                <option value={0}>Choose a topic</option>
                {topics.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </>
          </div>
          <div className="tw-mb-6">
            <label
              htmlFor="description"
              className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
            >
              Detail
            </label>
            <textarea
              id="description"
              rows={8}
              className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-primary-500 focus:tw-border-primary-500 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
              placeholder="Your content here"
              required
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <label
                htmlFor="meta_key"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Meta key
              </label>
              <input
                type="text"
                id="meta_key"
                value={metakey}
                onChange={(e) => setMetaKey(e.target.value)}
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter meta key..."
                required
              />
            </div>
            <div>
              <label
                htmlFor="meta_desc"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Meta description
              </label>
              <input
                type="text"
                id="meta_desc"
                value={metadesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter meta description..."
                required
              />
            </div>
          </div>

          <div className="tw-mb-6">
            <label
              htmlFor="meta_desc"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Status
            </label>
            <select
              id="parent"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="2">Inactive</option>
              <option value="1">Active</option>
            </select>
          </div>

          <button
            type="submit"
            className="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PostNew;
