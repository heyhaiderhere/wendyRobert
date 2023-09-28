import React from "react";
import { ConsultationPlaner } from "../header";
import slide1 from "../../assets/slides/slide-1.jpeg";
import slide2 from "../../assets/slides/slide-2.jpeg";
import slide3 from "../../assets/slides/slide-3.jpeg";
import slide4 from "../../assets/slides/slide-5.jpeg";
import beforeImg from "../../assets/images/home-before.jpeg";
import afterImg from "../../assets/images/home-after.jpeg";
import mag1 from "../../assets/images/Essence-Magazine.jpeg";
import mag2 from "../../assets/images/nationally-recognized.jpeg";
import stars from "../../assets/images/stars.png";
import { Link } from "react-router-dom";
import { Slider } from "../slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <ConsultationPlaner />
      <main>
        <section className="home-section-main">
          <h4>RANCHO MIRAGE</h4>
          <div className="rancho-info">
            <h3>Master Dermatologist</h3>
            <p>
              Our motto is "Leave no stone unturned until the solution for a
              specific skin problem is found.” We're passionate about
              Generational & Cosmetic Dermatology and believe anyone can have
              healthy, beautiful skin throughout their life. Let us serve you!
            </p>
          </div>

          <div className="testemonials-container">
            <Link to={""} className="testemonial-link">
              <div className="testemonial">
                <img src={slide1} alt="" />
                <div className="testemonial-heading">
                  <h2 className="trajan-heading">
                    Liquid
                    <br />
                    <span className="trajan">Facelift</span>
                  </h2>
                  <p className="learnmore">Learn More</p>
                </div>
              </div>
            </Link>
            <Link to={""} className="testemonial-link">
              <div className="testemonial">
                <img src={slide3} alt="" />
                <div className="testemonial-heading">
                  <h2 className="trajan-heading">
                    Liquid
                    <br />
                    <span className="trajan">Facelift</span>
                  </h2>
                  <p className="learnmore">Learn More</p>
                </div>
              </div>
            </Link>
            <Link to={""} className="testemonial-link">
              <div className="testemonial">
                <img src={slide2} alt="" />
                <div className="testemonial-heading">
                  <h2 className="trajan-heading">
                    Liquid
                    <br />
                    <span className="trajan">Facelift</span>
                  </h2>
                  <p className="learnmore">Learn More</p>
                </div>
              </div>
            </Link>
            <Link to={""} className="testemonial-link">
              <div className="testemonial">
                <img src={slide4} alt="" />
                <div className="testemonial-heading">
                  <h2 className="trajan-heading">
                    Liquid
                    <br />
                    <span className="trajan">Facelift</span>
                  </h2>
                  <p className="learnmore">Learn More</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="home-video-section">
          <div className="grid-container col-2">
            <div className="home-video-section-grid-1">
              <iframe
                src="https://www.youtube.com/embed/J5Rk2tchDts?autoplay=0&amp;rel=0"
                frameborder="0"
                allowfullscreen="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className="home-video-section-grid-2">
              <h2
                style={{
                  fontSize: 40,
                }}
              >
                Dr. Wendy Roberts
              </h2>
              <h4
                style={{
                  fontSize: 22,
                }}
              >
                DOUBLE BOARD CERTIFIED DERMATOLOGIST
              </h4>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 300,
                  color: "#666666",
                }}
              >
                "My passion is Generational Dermatology which is the method and
                practice that addresses evolving, aging skin. I believe anyone
                can have healthy, beautiful skin at any age, and maintain it
                throughout the course of their lifetime. "Save Our Skin" is an
                opportunity to fuel proactive decision making when it comes to
                sun safety and skin awareness." - Dr. Roberts
              </p>
              <Link to={""} className="learnmore-btn">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="home-patient-stories">
          <div className="grid-container col-3 container">
            <div className="patient-story-col-1">
              <h1 style={{ fontSize: 36, color: "#333", fontWeight: 400 }}>
                Patient Results
              </h1>
              <div className="bf-result-container">
                <img className="stories-img" src={beforeImg} alt="" />
                <img className="stories-img" src={afterImg} alt="" />
              </div>
              <Link to={""} className="learnmore-btn">
                View Gallery
              </Link>
            </div>

            <div className="patient-story-col-1">
              <h1 style={{ fontSize: 36, color: "#333", fontWeight: 400 }}>
                Patient Stories
              </h1>
              <div className="bf-result-container">
                <img src={stars} alt="" />
              </div>
              <p
                style={{
                  fontSize: "1.3em",
                }}
                className="simple-paragraph"
              >
                <em>
                  "Warm, kind, amazing, professional, excellent doctor. You
                  can't help but love Dr. Roberts. She does great work and she
                  is comforting and caring to everyone that walks into her
                  office. She has my vote for "best doctor" ever!"
                </em>
              </p>
              <Link to={""} className="learnmore-btn">
                View Gallery
              </Link>
            </div>
            <div className="patient-story-col-1">
              <h1 style={{ fontSize: 36, color: "#333", fontWeight: 400 }}>
                Nationally Recognized
              </h1>
              <div className="bf-result-container">
                <img className="stories-img" src={mag1} alt="" />
                <img className="stories-img" src={mag2} alt="" />
              </div>
              <Link to={""} className="learnmore-btn">
                View Gallery
              </Link>
            </div>
          </div>
        </section>
        <ConsultationPlaner extraClass={"noMargin"} />
      </main>
    </div>
  );
};

export default Home;
