import React, { useState } from "react";
import axios from "../../utils/axios";
import { ToastContainer, toast } from "react-toastify";
const ConsultationPlaner = ({ extraClass }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, phone, message, email } = e.target.elements;
    if (email.value === "") return;
    const { data, status } = await axios("/mail/sendMail", {
      method: "post",
      data: {
        fullName: fullName.value,
        phone: phone.value,
        message: message.value,
        email: email.value,
      },
    });
    if (status === 200) {
      toast("email sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className={`consultation-planner-container ${extraClass}`}>
      <h4
        style={{
          marginTop: 350,
        }}
        className="consultation-planner-heading"
      >
        CONSULTATION PLANNER
      </h4>
      <form onSubmit={handleSubmit} className="consultation-input-container">
        <input
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          type="text"
          className="consultation-input"
        />
        <input
          name="phone"
          id="phone"
          placeholder="Phone"
          type="phone"
          className="consultation-input"
        />
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          className="consultation-input"
        />
        <input
          id="message"
          name="message"
          placeholder="How may we help you"
          type="text"
          className="consultation-input"
        />
        <button type="submit" className="consultation-send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ConsultationPlaner;
