import moment from "moment/moment";

export default function DatetimeFormat(date) {
  return moment(date).utcOffset("+0000").format("DD-MM-YYYY HH:mm");
}
