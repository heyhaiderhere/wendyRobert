import React, { useEffect, useState } from "react";
import ReviewStars from "./ReviewStars";
import SingleReview from "./SingleReview";
import axios from "../../utils/axios";

const Review = ({ elements }) => {
  const [reviews, setReview] = useState([]);
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [formData, setFormData] = useState({
    author: "",
    reviewTitle: "",
    message: "",
  });

  const dispatchData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status } = await axios("/review/create", {
      method: "post",
      data: formData,
    });
    setFormData({
      author: "",
      reviewTitle: "",
      message: "",
    });
    if (status === 200) {
      handleReviews();
    }
  };

  const handleReviews = async () => {
    const { data, status } = await axios("/review/reviewList");
    if (status === 200) {
      setReview(data);
    }
  };
  useEffect(() => {
    handleReviews();
  }, []);
  return (
    <div>
      {elements?.heading && (
        <h1 className={`generic-heading ${elements.classes}`}>
          {elements.heading}
        </h1>
      )}
      <form
        style={{
          height: toggleCollapse ? "400px" : 0,
          overflow: "hidden",
        }}
        onSubmit={handleSubmit}
        className="review-form"
      >
        <input
          name="author"
          onChange={(e) => {
            dispatchData(e.target.name, e.target.value);
          }}
          value={formData.author}
          type="text"
          className="review-input"
          placeholder="Your Name"
        />
        <input
          onChange={(e) => {
            dispatchData(e.target.name, e.target.value);
          }}
          value={formData.reviewTitle}
          name="reviewTitle"
          type="text"
          className="review-input"
          placeholder="Review Title"
        />
        <textarea
          onChange={(e) => {
            dispatchData(e.target.name, e.target.value);
          }}
          style={{
            resize: "none",
            height: 200,
          }}
          minLength={10}
          maxLength={500}
          value={formData.message}
          name="message"
          type="text"
          className="review-input"
          placeholder="Your Name"
        />
        <button
          className="consultation-send-button"
          style={{
            padding: ".5rem 1rem",
            width: "20%",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="consultation-send-button"
        onClick={() => {
          setToggleCollapse(!toggleCollapse);
        }}
        style={{
          padding: ".5rem 1rem",
          width: "30%",
          marginTop: toggleCollapse && 16,
        }}
      >
        {toggleCollapse ? "Cancel review" : "Leave a review"}
      </button>

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
      <div
        style={{
          display: "flex",
        }}
      >
        <ReviewStars stars={5} />
        <span>10 Reviews</span>
      </div>
      <div
        style={{
          marginTop: "3rem",
        }}
        className="reviews-wrapper"
      >
        {reviews?.map((review, index) => {
          return <SingleReview key={index} content={review} />;
        })}
      </div>
    </div>
  );
};

export default Review;
