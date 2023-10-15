import React from "react";

const SocialMedia = ({ element }) => {
  console.log(element);
  return (
    <div style={{ ...element?.styles }} className="socialicons lazyloaded">
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
  );
};

export default SocialMedia;
