import React from "react";
import banner from "../assets/images/services-banner.jpg";
import { Link } from "react-router-dom";
import { services } from "../pageData/services";
import usePageTitle from "../hooks/usePageTitle";
const Services = () => {
  usePageTitle("services");
  return (
    <div className="services-wrapper">
      <img src={banner} alt="" />
      <div className="container">
        <h3>COSMETIC & MEDICAL – For All Ages & Skin Types</h3>
        <p className="simple-paragraph left-align">
          “My passion is Generational Dermatology which is the method and
          practice that addresses evolving, aging skin. I believe anyone can
          have healthy, beautiful skin at any age, and maintain it throughout
          the course of their lifetime. Generational Dermatology is an
          opportunity for me to fuel proactive decision making when it comes to
          skin awareness and long lasting skin health.
        </p>
        <div
          style={{
            gap: 10,
            columnGap: 50,
            // placeItems: "center",
          }}
          className="grid-container col-4"
        >
          {services.map((service, i) => {
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
export default Services;
