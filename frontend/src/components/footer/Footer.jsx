import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footer-logo.png";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f7f7f7",
        borderTop: "1px dashed gray",
      }}
    >
      <section>
        <div className="footer-links-wrapper container">
          <div className="footer-links-container">
            <h4
              style={{
                fontSize: 20,
              }}
            >
              Office
            </h4>
            <div className="footer-links-div">
              <Link to={"office"}>Our Office</Link>
              <Link to={""}>In the media</Link>
              <Link to={""}>Testimonials</Link>
            </div>
          </div>
          <div className="footer-links-container">
            <h4
              style={{
                fontSize: 24,
              }}
            >
              DERMATOLOGY
            </h4>
            <div className="footer-links-div">
              <Link to={""}>Dermatology</Link>
              <Link to={""}>Generational Dermatology</Link>
              <Link to={""}>Skin Type Classification</Link>
            </div>
          </div>
          <div className="footer-links-container">
            <h4
              style={{
                fontSize: 24,
              }}
            >
              RESOURCES
            </h4>
            <div className="footer-links-div">
              <Link to={""}>Articles</Link>
              <Link to={""}>Image Gallery</Link>
              <Link to={""}>Video Gallery</Link>
              <Link to={""}>Publications</Link>
            </div>
          </div>
          <div className="footer-links-container">
            <h4
              style={{
                fontSize: 24,
              }}
            >
              CONTACT
            </h4>
            <div className="footer-links-div">
              <p>
                35-280 Bob Hope Drive, Suite 105 Rancho Mirage, CA 92270 Phone:
                760-346-4262
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-rignts-div">
        <div
          style={{
            width: "80%",
          }}
        >
          <span>© 2023 Crystal Clear Digital Marketing | </span>
          <Link>Site Map</Link>
          <span> | </span>
          <Link>TOS/Privacy Policy</Link>
          <span> | </span>
          <Link>Wendy Roberts, MD</Link>
        </div>
        <img src={footerLogo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
