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
        return (
          <React.Fragment key={i}>
            {elem.type === "paragraph" ? (
              <Paragraph element={elem} />
            ) : elem.type === "image" ? (
              <Image element={elem} />
            ) : elem.type === "imageArray" ? (
              <ImageArray element={elem} />
            ) : elem.type === "map" ? (
              <Iframe element={elem} />
            ) : elem.type === "quote" ? (
              <Quote element={elem} />
            ) : elem.type === "custom" ? (
              <Custom element={elem} />
            ) : elem.type === "list" ? (
              <List element={elem} />
            ) : elem.type === "comparison" ? (
              <Comparison element={elem} count={i} />
            ) : elem.type === "blog" ? (
              <SingleBlogType element={elem} />
            ) : elem.type === "socialMedia" ? (
              <SocialMedia element={elem} />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default GenericElementBuilder;
