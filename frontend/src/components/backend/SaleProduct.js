import DatetimeFormat from "../../helpers/DateFormat";

function SaleProduct(props) {
  return (
    <tr
      key={props.index}
      className="tw-bg-white tw-border-b light:tw-bg-gray-800 light:tw-border-gray-700 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600"
    >
      <th
        scope="row"
        className="tw-px-6 py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap light:tw-text-white"
      >
        {props.item.name}
      </th>
      <td className="tw-px-6 tw-py-4">{props.item.price}</td>
      <td className="tw-px-6 tw-py-4">{props.item.pricesale}</td>
      <td className="tw-px-6 tw-py-4">{props.item.qty}</td>
      <td className="tw-px-6 tw-py-4">
        {DatetimeFormat(props.item.startDate)}
      </td>
      <td className="tw-px-6 tw-py-4">{DatetimeFormat(props.item.endDate)}</td>
      <td className="tw-px-6 tw-py-4">{props.item.id}</td>
      <td className="tw-px-6 tw-py-4 tw-flex tw-items-center">
        <button
          type="button"
          className="tw-text-white tw-bg-gradient-to-br tw-from-pink-500 tw-to-orange-400 hover:tw-bg-gradient-to-bl focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-pink-200 light:focus:tw-ring-pink-800 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2"
          onClick={() => props.remove(props.item.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default SaleProduct;
