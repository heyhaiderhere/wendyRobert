import React from "react";

const ConsultationPlaner = ({ extraClass }) => {
  return (
    <div
      style={
        {
          // marginTop: 350,
        }
      }
      className={`consultation-planner-container ${extraClass}`}
    >
      <h4
        style={{
          marginTop: 350,
        }}
        className="consultation-planner-heading"
      >
        CONSULTATION PLANNER
      </h4>
      <div className="consultation-input-container">
        <input
          placeholder="Full Name"
          type="text"
          className="consultation-input"
        />
        <input placeholder="Phone" type="text" className="consultation-input" />
        <input placeholder="Email" type="text" className="consultation-input" />
        <input
          placeholder="How may we help you"
          type="text"
          className="consultation-input"
        />
        <button className="consultation-send-button">Send</button>
      </div>
    </div>
  );
};

export default ConsultationPlaner;
