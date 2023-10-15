import React, { useEffect, useRef, useState } from "react";
import HeaderImage from "../../assets/images/header-image.jpeg";
import LogoImage from "../../assets/images/logo-footer.png";
import { Link } from "react-router-dom";
import { SocialMedia } from "../reusbles";

const Header = () => {
  const navRef = useRef();
  // const menuRef = useRef();
  const [callDisplay, setCallDisplay] = useState("none");
  useEffect(() => {
    const sticky = navRef?.current?.offsetTop;
    window.addEventListener("scroll", (e) => {
      console.log(sticky, window.pageYOffset);
      // console.log(navRef.current.classList.add("apple"));
      const navbar = navRef.current;
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        setCallDisplay("block");
      } else {
        navbar.classList.remove("sticky");
        setCallDisplay("none");
      }
    });
  }, []);

  const handleTogle = () => {
    const navbar = navRef.current;
    navbar.classList.toggle("show");
  };
  return (
    <>
      <div className="header-image-container">
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <img className="header-image" src={HeaderImage} alt="" />
        </div>
        <div className="header-logo-container">
          <img className="header-logo" src={LogoImage} alt="" />
          <a className="telephone" href="tel:7603464262">
            760-346-4262
          </a>
          <SocialMedia />
        </div>
      </div>

      <nav ref={navRef} className="navbar">
        <ul className="navbar-list-container">
          <button
            className="responsive-menu-container"
            style={{
              marginTop: 0,
              height: 20,
              width: 20,
              background: "none",
              fontSize: 30,
              fontWeight: 600,
              color: "#000",
              cursor: "pointer",
              alignSelf: "flex-end",
              paddingRight: 10,
            }}
            onClick={handleTogle}
          >
            &#10005;
          </button>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"our-office"}>
            <li>Our Office</li>
          </Link>
          <Link to={"services"}>
            <li>Services</li>
          </Link>
          <a href="https://generationaldermatology.com" target="blank">
            <li>GDERM</li>
          </a>
          <Link to={"wink"}>
            <li>wink</li>
          </Link>
          <Link to={"gallery"}>
            <li>Gallery</li>
          </Link>
          <Link to={"in-the-media"}>
            <li>In the media</li>
          </Link>
          <Link to={"blog"}>
            <li>blog</li>
          </Link>
          <Link to={"reviews"}>
            <li>reviews</li>
          </Link>
          <Link to={"travel"}>
            <li>Travel</li>
          </Link>
          <Link to={"contact"}>
            <li>Contact</li>
          </Link>
          <a
            style={{
              display: callDisplay,
            }}
            className="telephone"
            href="tel:7603464262"
          >
            CALL TODAY 760-346-4262
          </a>
        </ul>
      </nav>
      <div className="responsive-menu-container">
        <button
          style={{
            background: "none",
            fontSize: 30,
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={handleTogle}
        >
          Menu
        </button>
      </div>
    </>
  );
};

export default Header;
