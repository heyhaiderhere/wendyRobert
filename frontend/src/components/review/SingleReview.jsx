import React from "react";
import { Paragraph, Quote } from "../reusbles";
import ReviewStars from "./ReviewStars";

const SingleReview = ({ content }) => {
  return (
    <div>
      <ReviewStars stars={5} />
      <Paragraph
        element={{
          subHeading: content?.reviewTitle,
          description: `By ${content?.author}`,
          paraStyles: {
            margin: 0,
          },
        }}
      />
      <Quote
        element={{
          quotes: [content?.message],
        }}
      />
    </div>
  );
};

export default SingleReview;
