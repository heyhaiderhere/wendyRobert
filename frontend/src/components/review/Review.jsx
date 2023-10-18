import React from "react";
import ReviewStars from "./ReviewStars";
import SingleReview from "./SingleReview";

const Review = ({ elements }) => {
  console.log(elements, "apple");
  return (
    <div>
      {elements?.heading && (
        <h1 className={`generic-heading ${elements.classes}`}>
          {elements.heading}
        </h1>
      )}
      {elements?.headingImage && (
        <img
          style={{
            width: "100%",
          }}
          src={elements.headingImage}
          alt=""
        />
      )}
      <p className="simple-paragraph left-align">
        {elements.headingDescription}
      </p>
      <div
        style={{
          display: "flex",
        }}
      >
        <ReviewStars stars={5} />
        <span>10 Reviews</span>
      </div>
      <div
        style={{
          marginTop: "3rem",
        }}
        className="reviews-wrapper"
      >
        {elements?.content?.map((review) => {
          return <SingleReview content={review} />;
        })}
      </div>
    </div>
  );
};

export default Review;
