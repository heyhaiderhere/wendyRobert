import React from "react";

const Quote = ({ element }) => {
  return element?.quotes.map((quote, index) => {
    return (
      <blockquote
        key={index}
        style={{
          margin: 40,
        }}
        className="blockquote"
      >
        <p
          style={{ width: "fit-content" }}
          className="simple-paragraph left-align "
        >
          {quote}
        </p>
      </blockquote>
    );
  });
};

export default Quote;
