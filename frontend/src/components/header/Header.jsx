import React, { useEffect, useRef, useState } from "react";
import HeaderImage from "../../assets/images/header-image.jpeg";
import LogoImage from "../../assets/images/logo-footer.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef();
  // const menuRef = useRef();
  const [callDisplay, setCallDisplay] = useState("none");
  // useEffect(() => {
  //   const sticky = navRef?.current?.offsetTop;
  //   window.addEventListener("scroll", (e) => {
  //     console.log(sticky, window.pageYOffset);
  //     // console.log(navRef.current.classList.add("apple"));
  //     const navbar = navRef.current;
  //     if (window.pageYOffset >= sticky) {
  //       navbar.classList.add("sticky");
  //       setCallDisplay("block");
  //     } else {
  //       navbar.classList.remove("sticky");
  //       setCallDisplay("none");
  //     }
  //   });
  // }, []);

  const handleTogle = () => {
    const navbar = navRef.current;
    navbar.classList.toggle("show");
  };
  return (
    <>
      <div className="header-image-container">
        <div>
          <img className="header-image" src={HeaderImage} alt="" />
        </div>
        <div className="header-logo-container">
          <img className="header-logo" src={LogoImage} alt="" />
          <a className="telephone" href="tel:7603464262">
            760-346-4262
          </a>
          <div className="socialicons lazyloaded">
            <a
              href="http://www.facebook.com/pages/Dr-Wendy-E-Roberts-MD/208899759183376"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/dryouthbooster"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.google.com/maps?ll=33.791462,-116.405454&amp;z=13&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed&amp;cid=1977161187082865093"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>
            <a
              href="http://www.yelp.com/biz/wendy-roberts-md-rancho-mirage"
              target="_blank"
              rel="noopener"
            >
              <i className="fa fa-yelp" aria-hidden="true"></i>
            </a>
          </div>
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
          <Link to={""}>
            <li>Our Office</li>
          </Link>
          <Link to={"services"}>
            <li>Services</li>
          </Link>
          <Link to={""}>
            <li>GDERM</li>
          </Link>
          <Link to={""}>
            <li>wink</li>
          </Link>
          <Link to={""}>
            <li>Gallery</li>
          </Link>
          <Link to={""}>
            <li>In the media</li>
          </Link>
          <Link to={""}>
            <li>blog</li>
          </Link>
          <Link to={""}>
            <li>reviews</li>
          </Link>
          <Link to={""}>
            <li>Travel</li>
          </Link>
          <Link to={""}>
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
