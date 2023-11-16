import { useEffect, useState } from "react";
import { useAuth } from "../../../provider/UserProvider";
import { useNavigate } from "react-router-dom";
import reviewservice from "../../../services/ReviewService";
import DatetimeFormat from "../../../helpers/DateFormat";

function CommentSection(props) {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [reviews, setReviews] = useState([]);
  const [flag, setFlag] = useState(false);
  var comment_limit = 15;
  const render_star = (number) => {
    return (
      <>
        {[...Array(number)].map(() => {
          return (
            <svg
              class="tw-w-4 tw-h-4 tw-text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          );
        })}
        {number < 5
          ? [...Array(5 - number)].map(() => {
              return (
                <svg
                  class="tw-w-4 tw-h-4 tw-text-gray-300 light:tw-text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })
          : ""}
      </>
    );
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result1 = await reviewservice.getReviewsByProductId(
          props.product_id
        );
        setReviews(result1.data.data);
      }
      fetchItems();
    }, 200);
    return () => clearTimeout(delayDebounceFn);
  }, [props.product_id, flag]);

  const handleRating = (rating) => {
    if (rating > 5) {
      setRating(5);
      return;
    }
    if (rating < 1) {
      setRating(1);
      return;
    }
    setRating(rating);
  };

  async function reviewSubmit(e) {
    e.preventDefault();
    if (!token) {
      navigate("/user-auth", { replace: true });
      return;
    }
    if (title.length === 0) {
      alert(`Nhập tiêu đề review`);
      return;
    }
    if (comment_limit - comment.length > 0) {
      alert(
        `Nhập thêm ${comment_limit - comment.length} từ nữa để đăng review`
      );
      return;
    }

    var review = new FormData();
    review.append("comment", comment);
    review.append("title", title);
    review.append("rating", rating);
    review.append("user_id", token.id);
    review.append("product_id", props.product_id);
    const result = await reviewservice.create(review);
    setFlag(!flag);
    if (result.data.success === true) {
      alert("thành công");
    } else {
      alert("thất bại");
    }
  }

  return (
    <>
      <div className="container" style={{ marginTop: 10 }}>
        <div className="tw-h-100 tw-px-7 tw-w-full tw-rounded-[12px] tw-bg-white tw-p-4">
          <p className="tw-text-xl tw-font-semibold tw-text-blue-900 tw-pointer-events-none tw-transition-all hover:tw-text-black">
            Add Comment
          </p>
          <form onSubmit={reviewSubmit} method="post">
            <input
              className="tw-h-10 tw-px-3 tw-text-sm tw-py-1 tw-mt-5 tw-outline-none tw-border-pink-300 tw-w-full tw-resize-none tw-border tw-rounded-lg placeholder:tw-text-sm"
              placeholder="Add your title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="tw-h-40 tw-px-3 tw-text-sm tw-py-1 tw-mt-5 tw-outline-none tw-border-pink-300 tw-w-full tw-resize-none tw-border tw-rounded-lg placeholder:tw-text-sm"
              placeholder="Add your review here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <label>Rating</label>
            <input
              type="number"
              className="tw-w-75 tw-border tw-ms-2 tw-border-pink-300 tw-rounded tw-text-center"
              min={1}
              value={rating}
              onChange={(e) => handleRating(e.target.value)}
              max={5}
            />
            <div className="tw-flex tw-justify-between tw-mt-2">
              <button
                type="submit"
                className="tw-h-12 tw-w-[150px] tw-bg-red-600 tw-text-sm tw-text-white tw-rounded-lg tw-transition-all tw-cursor-pointer hover:tw-bg-red-700"
              >
                Submit review
              </button>
              <p className="tw-text-sm tw-text-blue-900 ">
                {comment_limit - comment.length > 0
                  ? `You have ${
                      comment_limit - comment.length
                    } characters left to
              submit this review.`
                  : "You can submit this review now."}
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">Reviews section</h4>
        </header>
        {reviews.length !== 0
          ? reviews.map((item, index) => {
              return (
                <article
                  className="bg-white tw-p-4 tw-rounded-lg tw-shadow-lg tw-my-2"
                  key={index}
                >
                  <div class="tw-flex tw-items-center tw-mb-4">
                    <img
                      class="tw-w-10 tw-h-10 tw-me-4 tw-rounded-full"
                      src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
                      alt=""
                    />
                    <div class="font-medium light:tw-text-white">
                      <p>
                        {item.user.name}
                        <time
                          datetime="2014-08-16 19:00"
                          class="tw-block tw-text-sm tw-text-gray-500 light:tw-text-gray-400"
                        >
                          Joined on {DatetimeFormat(item.user.created_at)}
                        </time>
                      </p>
                    </div>
                  </div>
                  <div class="tw-flex tw-items-center tw-mb-1 tw-space-x-1 rtl:tw-space-x-reverse">
                    {render_star(item.rating)}

                    <h3 class="tw-ms-2 tw-text-sm tw-font-semibold tw-text-gray-900 light:tw-text-white">
                      {item.title}
                    </h3>
                  </div>
                  <footer class="tw-mb-5 tw-text-sm tw-text-gray-500 light:tw-text-gray-400">
                    <p>Reviewed on {DatetimeFormat(item.created_at)}</p>
                  </footer>
                  <p class="tw-mb-2 tw-text-gray-500 light:tw-text-gray-400">
                    {item.comment}
                  </p>
                </article>
              );
            })
          : "Chưa có đánh giá cho sản phẩm này"}
      </div>
    </>
  );
}

export default CommentSection;
