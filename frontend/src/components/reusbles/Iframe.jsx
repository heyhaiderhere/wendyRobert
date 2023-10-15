import React from "react";

const Iframe = ({ element }) => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.78286087397!2d-116.40765232418775!3d33.792105073256074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dafd448c440af5%3A0x1b70499fcbc389c5!2sDr.%20Wendy%20E.%20Roberts%2C%20MD!5e0!3m2!1sen!2s!4v1696096289728!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Iframe;
