import React from "react";

const ImageArray = ({ element }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid gray",
        padding: "0 0 20px 0",
        margin: "0 0 20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {element.images.map((image) => {
          return (
            <img
              style={{
                width: "45%",
                marginBottom: 20,
              }}
              src={image}
              alt=""
            />
          );
        })}
      </div>
      {element?.description && (
        <p
          style={{
            margin: 0,
          }}
          className="simple-paragraph left-align"
        >
          {element.description}
        </p>
      )}
    </div>
  );
};

export default ImageArray;
