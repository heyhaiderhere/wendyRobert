import React from "react";

const Custom = ({ element }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: element.html,
      }}
    ></div>
  );
};

export default Custom;
