import React from "react";
import GenericElementBuilder from "./GenericElementBuilder";
import { elements } from "../../pageData/pageData";
import { useParams } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { ConsultationPlaner } from "../header";
const GenericPageLayout = ({ elements, type }) => {
  console.log(elements, "sdf");
  return (
    <div className="generic-wrapper">
      {elements?.length > 0 ? (
        <div className="generic-container">
          {type === "blog" ? (
            <GenericElementBuilder elements={elements} type={type} />
          ) : (
            <GenericElementBuilder elements={elements[0]} />
          )}
          <div className="generic-col-2">
            <div className="red-carpet">
              <ConsultationPlaner extraClass="service-consultation" />
            </div>
            <div className="red-carpet">
              <span
                className="yelp-review"
                data-review-id="VXIPOR6LetJ9oNW7iKRwDg"
                data-hostname="www.yelp.com"
              >
                Read{" "}
                <a
                  href="https://www.yelp.com/user_details?userid=8FTk9EdWXQT_Hq62IHoqNQ"
                  rel="nofollow noopener"
                >
                  Patrice T.
                </a>
                's{" "}
                <a
                  href="https://www.yelp.com/biz/wendy-e-roberts-md-rancho-mirage-2?hrid=VXIPOR6LetJ9oNW7iKRwDg"
                  rel="nofollow noopener"
                >
                  review
                </a>{" "}
                of{" "}
                <a
                  href="https://www.yelp.com/biz/I1hOdK7FbWzspqUW0_AI_g"
                  rel="nofollow noopener"
                >
                  Wendy E Roberts, MD
                </a>{" "}
                on{" "}
                <a href="https://www.yelp.com" rel="nofollow noopener">
                  Yelp
                </a>
              </span>
            </div>
            <div
              style={{
                height: 800,
                overflow: "scroll",
              }}
            >
              {/* <TwitterTimelineEmbed
                sourceType="profile"
                userId={"396007183"}
                options={{ height: 800 }}
              /> */}
              <a
                class="twitter-timeline"
                href="https://twitter.com/dryouthbooster?ref_src=twsrc%5Etfw"
              >
                Tweets by dryouthbooster
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GenericPageLayout;
