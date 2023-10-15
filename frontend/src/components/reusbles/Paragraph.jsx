import React from "react";

const Paragraph = ({ element }) => {
  const description = element?.description?.split("\n");
  return (
    <div>
      {element?.subHeading && (
        <h4 style={{ fontSize: 30, ...element?.styles }}>
          {element.subHeading}
        </h4>
      )}
      {description?.map((desc, i) => {
        return (
          <React.Fragment key={i}>
            <p
              style={{ ...element?.paraStyles }}
              className={`simple-paragraph ${
                element?.paraStyles?.textAlign === "center" ? "" : "left-align"
              }`}
            >
              {desc}
              {element?.link && (
                <span>
                  <a
                    target="blank"
                    style={{
                      color: "#cb435f",
                    }}
                    href={element.link.src}
                  >{`${element.link.text}`}</a>
                </span>
              )}
            </p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Paragraph;
