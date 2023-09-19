import React, { useState } from "react";
import streetphoto from "../images/exterior/restaurant-street.jpeg";

export default function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission logic here
    console.log("Reservation submitted:", name, email, date, time);
    // Reset form fields
    setName("");
    setEmail("");
    setDate("");
    setTime("");
  };

  return (
    <div style={{ position: "relative" }}>
      <img src={streetphoto} style={{ height: "800px", width: "100%" }} />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ fontSize: "2rem", color: "#FF5722" }}>
          Reservation System
        </h2>
        <form onSubmit={handleSubmit}>
          <label style={{ marginBottom: "0.5rem" }}>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label style={{ marginBottom: "0.5rem" }}>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label style={{ marginBottom: "0.5rem" }}>
            Date:
            <input type="date" value={date} onChange={handleDateChange} />
          </label>
          <br />
          <label style={{ marginBottom: "0.5rem" }}>
            Time:
            <input type="time" value={time} onChange={handleTimeChange} />
          </label>
          <br />
          <div className="flex justify-center mt-8 flex">
            <button
              type="submit"
              className="text-white text-2xl font-normal font-['Istok Web'] bg-orange-400 rounded-full p-4 transition-all duration-300 hover:text-orange-400 border-orange-400 hover:bg-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
