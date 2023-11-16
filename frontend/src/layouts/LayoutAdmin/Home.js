import { Link } from "react-router-dom";

function Home() {
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
              <Link
                to="#"
                className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-blue-600 md:tw-ml-2 light:tw-text-gray-400 light:hover:tw-text-white"
              >
                Templates
              </Link>
            </div>
          </li>
          <li aria-current="page">
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
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
        <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 light:tw-text-gray-400">
          <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-200 light:tw-bg-gray-700 light:tw-text-gray-400">
            <tr>
              <th scope="col" className="tw-px-6 tw-py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Product name
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Color
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Category
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Price
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                <span className="tw-sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="tw-bg-white tw-border-b light:tw-bg-gray-800 light:tw-border-gray-700 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600">
              <td className="tw-w-32 tw-p-4">
                <img
                  src="/docs/images/products/apple-watch.png"
                  alt="Apple MacBook Pro 17"
                />
              </td>
              <th
                scope="row"
                className="tw-px-6 py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap light:tw-text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="tw-px-6 tw-py-4">Silver</td>
              <td className="tw-px-6 tw-py-4">Laptop</td>
              <td className="tw-px-6 tw-py-4">$2999</td>
              <td className="tw-px-6 tw-py-4 text-right">
                <Link
                  to="#"
                  className="tw-font-medium tw-text-blue-600 light:tw-text-blue-500 hover:tw-underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
            <tr className="tw-bg-white tw-border-b light:tw-bg-gray-800 light:tw-border-gray-700 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600">
              <td className="tw-w-32 tw-p-4">
                <img
                  src="/docs/images/products/apple-watch.png"
                  alt="Microsoft Surface Pro"
                />
              </td>
              <th
                scope="row"
                className="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap light:tw-text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="tw-px-6 tw-py-4">White</td>
              <td className="tw-px-6 tw-py-4">Laptop PC</td>
              <td className="tw-px-6 tw-py-4">$1999</td>
              <td className="tw-px-6 tw-py-4 tw-text-right">
                <Link
                  to="#"
                  className="tw-font-medium tw-text-blue-600 light:tw-text-blue-500 hover:tw-underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
            <tr className="tw-bg-white light:tw-bg-gray-800 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600">
              <td className="tw-w-32 tw-p-4">
                <img
                  src="/docs/images/products/apple-watch.png"
                  alt="Magic Mouse 2"
                />
              </td>
              <th
                scope="row"
                className="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap light:tw-text-white"
              >
                Magic Mouse 2
              </th>
              <td className="tw-px-6 tw-py-4">Black</td>
              <td className="tw-px-6 tw-py-4">Accessories</td>
              <td className="tw-px-6 tw-py-4">$99</td>
              <td className="tw-px-6 tw-py-4 tw-text-right">
                <Link
                  to="#"
                  className="tw-font-medium tw-text-blue-600 light:tw-text-blue-500 hover:tw-underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tw-flex tw-flex-col tw-items-center tw-mt-5">
        <span className="tw-text-sm tw-text-gray-700 light:tw-text-gray-400">
          Showing
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            1
          </span>
          to
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            10
          </span>
          of
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            100
          </span>
          Entries
        </span>
        <div className="tw-flex tw-mt-2 tw-space-x-2 xs:tw-mt-0">
          <button
            className="tw-flex tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
            disabled
          >
            Prev
          </button>
          <button className="tw-flex tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-border-0 tw-border-l tw-border-gray-700 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
