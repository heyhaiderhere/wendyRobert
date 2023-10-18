import React from "react";

const ReviewStars = ({ stars }) => {
  return (
    <div>
      {[...Array(stars)].map((star, i) => {
        return (
          <i
            key={i}
            style={{
              color: "#D4AE36",
              padding: 0,
              margin: "0 5px 0 0",
            }}
            className="fa fa-star"
          ></i>
        );
      })}
    </div>
  );
};

export default ReviewStars;
