import React from "react";
import {
  Comparison,
  Custom,
  Iframe,
  Image,
  ImageArray,
  List,
  Paragraph,
  Quote,
  SingleBlogType,
  SocialMedia,
} from "../reusbles";
import { Link } from "react-router-dom";
import { Review } from "../review";

const elementsLookup = {
  paragraph: Paragraph,
  quote: Quote,
  blog: SingleBlogType,
  socialMedia: SocialMedia,
  list: List,
  map: Iframe,
  image: Image,
  imageArray: ImageArray,
  comparison: Comparison,
  custom: Custom,
};

const GenericElementBuilder = ({ elements, type }) => {
  return type === "blog" ? (
    <div>
      {elements?.map((element, i) => {
        return (
          <React.Fragment key={i}>
            <Link
              onClick={() => [
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                }),
              ]}
              to={element?.pageRoute}
            >
              <h1
                style={{
                  fontSize: 32,
                }}
                className={`generic-heading ${element.classes}`}
              >
                {element?.heading}
              </h1>
              <img
                style={{
                  width: "100%",
                }}
                src={element.headingImage}
                alt=""
              />
            </Link>
            <p className="simple-paragraph left-align">
              {`${element?.headingDescription?.slice(0, 200)}[...]`}
            </p>
          </React.Fragment>
        );
      })}
    </div>
  ) : type === "review" ? (
    <Review elements={elements} />
  ) : (
    <div>
      {elements?.heading && (
        <h1 className={`generic-heading ${elements.classes}`}>
          {elements.heading}
        </h1>
      )}
      {elements?.headingImage && (
        <img
          style={{
            width: "100%",
          }}
          src={elements.headingImage}
          alt=""
        />
      )}
      <p className="simple-paragraph left-align">
        {elements.headingDescription}
      </p>
      {elements?.headingText && (
        <div
          style={{
            backgroundColor: "#c11f41",
            width: "100%",
            padding: "10px 15px",
          }}
          className="gallery-heading-inner"
        >
          <h4
            style={{
              textAlign: "center",
              fontSize: 24,
              color: "white",
              margin: 0,
            }}
          >
            {elements.headingText}
          </h4>
        </div>
      )}

      {elements?.content?.map((elem, i) => {
        const Component = elementsLookup[elem.type];
        return (
          <React.Fragment key={i}>
            <Component element={elem} count={i} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default GenericElementBuilder;
