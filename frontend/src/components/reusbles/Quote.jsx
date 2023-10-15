import React from "react";

const Quote = ({ element }) => {
  return element?.quotes.map((quote) => {
    return (
      <blockquote
        style={{
          margin: 40,
        }}
        className="blockquote"
      >
        <p className="simple-paragraph left-align ">{quote}</p>
      </blockquote>
    );
  });
};

export default Quote;
