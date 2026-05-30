import React, { useState } from "react";

function App() {
  const [hover, setHover] = useState(false);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5",
  };

  const cardStyle = {
    width: "700px",
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    gap: "20px",
    boxShadow: hover
      ? "0 8px 16px rgba(0, 0, 0, 0.5)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
    border: "3px solid transparent",
    backgroundImage:
      "linear-gradient(white, white), linear-gradient(135deg, #1b1b1c, #adb6b8)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
  };

  const imageStyle = {
    width: "220px",
    height: "260px",
    borderRadius: "10px",
    border: "4px solid #000000c7",
    objectFit: "cover",
    transition: hover ? "transform 0.3s, box-shadow 0.3s" : "transform 0.3s",
    transform: hover ? "scale(1.05)" : "scale(1)",
    boxShadow: hover
      ? "0 8px 16px rgba(0, 0, 0, 0.5)"
      : "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const detailsStyle = {
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.8",
    flex: 1,
  };

  const headingStyle = {
    marginBottom: "10px",
    color: "#002895",
  };

  const logoStyle = {
    width: "170px",
    marginBottom: "10px",
    height: "110px",
  };

  return (
    <div style={containerStyle}>
      <div
        style={cardStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/12/42/boy-160149_1280.png"
          alt="Student"
          style={imageStyle}
        />

        <div style={detailsStyle}>
          <img
            src="https://www.abes.ac.in/assets/Logo.webp"
            alt="Logo"
            style={logoStyle}
          />

          <h2 style={headingStyle}>Student ID Card</h2>

          <p><strong>ID Number:</strong> 123456</p>
          <p><strong>Name:</strong> Rahul Sharma</p>
          <p><strong>DOB:</strong> 01 Jan 2005</p>
          <p><strong>Branch:</strong> Computer Science</p>
          <p><strong>Year:</strong> 3rd Year</p>
          <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>
          <p><strong>Contact:</strong>9465242801</p>
        </div>
      </div>
    </div>
  );
}

export default App;