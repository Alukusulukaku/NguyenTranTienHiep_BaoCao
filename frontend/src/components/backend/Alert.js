import { useContext } from "react";
import AlertContext from "../../provider/AlertProvider";

function Alert() {
  const [alert] = useContext(AlertContext);
  if (!alert) {
    return null;
  }
  const success = () => {
    return (
      <div
        className="tw-flex tw-shadow-md alerttest tw-fixed tw-translate-x-1/2 tw-z-99 tw-w-6/12 tw-right-0 tw-left-0 tw-top-1000 tw-items-center tw-p-4 tw-mb-4 tw-text-sm tw-text-green-800 tw-border tw-border-green-300 tw-rounded-lg tw-bg-green-50 light:tw-bg-gray-800 light:tw-text-green-400 light:tw-border-green-800"
        role="alert"
      >
        <svg
          className="tw-flex-shrink-0 tw-inline tw-w-4 tw-h-4 tw-mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="tw-sr-only">Info</span>
        <div>
          <span className="tw-font-medium">Success!</span> {alert.text}
        </div>
      </div>
    );
  };
  const failed = () => {
    return (
      <div
        className="tw-flex tw-shadow-md alerttest tw-fixed tw-translate-x-1/2 tw-z-99 tw-w-6/12 tw-right-0 tw-left-0 tw-top-1000 tw-items-center tw-p-4 tw-mb-4 tw-text-sm tw-text-red-800 tw-rounded-lg tw-bg-red-50 light:tw-bg-gray-800 light:tw-text-red-400"
        role="alert"
      >
        <svg
          className="tw-flex-shrink-0 tw-inline tw-w-4 tw-h-4 tw-mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="tw-sr-only">Info</span>
        <div>
          <span className="tw-font-medium">Failed! </span>
          {alert.text}
        </div>
      </div>
    );
  };
  return <>{alert.type === "success" ? success() : failed()}</>;
}

export default Alert;
