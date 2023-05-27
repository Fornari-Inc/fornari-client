import React from "react";

const CustomAlert: React.FC = () => {
  return (
    <div style={{ maxWidth: "600px" }}>
      <div
        style={{
          backgroundColor: "#E2F0D9",
          border: "1px solid #6ABF69",
          color: "#276749",
          padding: "12px",
          borderRadius: "4px",
          position: "absolute",
          left: "0",
          top: "0",
        }}
        role="alert"
      >
        <strong style={{ fontWeight: "bold" }}>Success!</strong>
        <span style={{ display: "block", marginTop: "4px" }}>
          Your message has been sent successfully.
        </span>
      </div>
    </div>
  );
};

export default CustomAlert;
