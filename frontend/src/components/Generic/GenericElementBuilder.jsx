import React from "react";

const GenericElementBuilder = ({ elements }) => {
  //   console.log(elements);

  return (
    <div>
      <h1 className="generic-heading">{elements.heading}</h1>
      <img
        style={{
          width: "100%",
        }}
        src={elements.headingImage}
        alt=""
      />
      <p className="simple-paragraph left-align ">
        {elements.headingDescription}
      </p>
      {elements?.content?.map((elem, i) => {
        const description = elem?.description?.split("\n");
        return (
          <React.Fragment key={i}>
            {elem.type === "paragraph" ? (
              <div>
                <h4 style={{ fontSize: 30 }}>{elem.subHeading}</h4>
                {description?.map((desc, i) => {
                  return (
                    <p key={i} className="simple-paragraph left-align ">
                      {desc}
                    </p>
                  );
                })}
              </div>
            ) : elem.type === "image" ? (
              <img
                style={{
                  width: "100%",
                  marginBottom: 20,
                }}
                src={elem.image}
                alt=""
              />
            ) : (
              <div>
                <h4 style={{ fontSize: 30 }}>{elem?.subHeading}</h4>
                <ul
                  style={{
                    marginLeft: "2rem",
                  }}
                >
                  {elem?.list?.map((li) => {
                    return (
                      <li
                        style={{
                          listStyle: "inside",
                          color: "#666",
                        }}
                      >
                        {li}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default GenericElementBuilder;
