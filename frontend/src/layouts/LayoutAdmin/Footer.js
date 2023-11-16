import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="tw-bg-white tw-rounded-lg tw-shadow tw-mt-4 light:tw-bg-gray-800">
      <div className="tw-w-full tw-mx-auto tw-max-w-screen-xl tw-p-4 tw-flex tw-items-center tw-justify-between">
        <span className="tw-text-sm tw-text-gray-500 sm:tw-text-center light:tw-text-gray-400">
          © 2023{" "}
          <Link to="https://flowbite.com/" className="hover:tw-underline">
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
        <ul
          className="tw-flex tw-flex-wrap tw-items-center tw-mt-3 tw-text-sm tw-font-medium tw-text-gray-500 dark:tw-text-gray-400 sm:tw-mt-0"
          style={{
            listStyle: "none",
          }}
        >
          <li>
            <Link to="#" className="tw-mr-4 hover:tw-underline md:tw-mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="tw-mr-4 hover:tw-underline md:tw-mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className="tw-mr-4 hover:tw-underline md:tw-mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:tw-underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
