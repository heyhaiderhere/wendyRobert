import React from "react";

const Image = ({ element }) => {
  return (
    <img
      style={{
        width: "100%",
        marginBottom: 20,
      }}
      src={element?.image}
      alt=""
    />
  );
};

export default Image;
