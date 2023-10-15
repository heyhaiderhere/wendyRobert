import React from "react";
import banner from "../assets/images/services-banner.jpg";
import { Link } from "react-router-dom";
import { gallery } from "../pageData/services";
const Gallery = () => {
  return (
    <div className="services-wrapper">
      <div className="container">
        <h2 style={{ textAlign: "center", fontSize: 40 }}>
          Before & After Gallery
        </h2>
        <h3 style={{ textAlign: "center" }}>Please Select a Category Below</h3>

        <div
          style={{
            gap: 10,
            columnGap: 50,
            // placeItems: "center",
          }}
          className="grid-container col-4"
        >
          {gallery.map((service, i) => {
            return (
              <Link
                onClick={() => [
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  }),
                ]}
                to={service.path}
                key={i}
                className="service-button"
              >
                {service.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
