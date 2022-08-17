import React from "react";

export const ClientSvg = (props) => {
  return (
    <div>
      <div>{<img src={props.source} />}</div>
    </div>
  );
};
