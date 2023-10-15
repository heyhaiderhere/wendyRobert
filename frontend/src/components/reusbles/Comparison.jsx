import React from "react";

const Comparison = ({ element, count }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "1rem",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              maxWidth: 300,
            }}
            className="stories-img"
            src={element.beforeImage}
            alt=""
          />
          <h2>Before</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              maxWidth: 300,
            }}
            className="stories-img"
            src={element?.afterImage}
            alt=""
          />
          <h2>after</h2>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#c11f41",
          width: "100%",
          padding: "10px 15px",
        }}
        className="gallery-heading-inner"
      >
        <h4
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "white",
            margin: 0,
          }}
        >
          Patient {count + 1}
        </h4>
      </div>
    </div>
  );
};

export default Comparison;
