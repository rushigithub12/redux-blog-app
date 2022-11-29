import { formatDistanceToNow, parseISO } from "date-fns/esm";
import React from "react";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    let date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
