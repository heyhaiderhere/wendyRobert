import React from "react";
import { Paragraph, Quote } from "../reusbles";
import ReviewStars from "./ReviewStars";

const SingleReview = ({ content }) => {
  return (
    <div>
      <ReviewStars stars={5} />
      <Paragraph
        element={{
          subHeading: content.title,
          description: `By ${content.author}`,
          paraStyles: {
            margin: 0,
          },
        }}
      />
      <Quote
        element={{
          quotes: content?.review,
        }}
      />
    </div>
  );
};

export default SingleReview;
