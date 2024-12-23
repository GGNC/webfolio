import React from "react";
interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}
function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <div
      style={{
        backgroundColor: "#1c1c22",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <h1
        style={{
          color: "#e2e8f0",
          fontSize: "48px",
          fontWeight: "extrabold",
          textAlign: "center",
          padding: "0",
          margin: "2px",
        }}
      >
        {name}
      </h1>
      <h2
        style={{
          width: "100%",
          color: "#22c55e",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "0",
          margin: "2px",
        }}
      >
        {email}
      </h2>
      <p
        style={{
          width: "100%",
          padding: "0",
          marginTop: "5px",
          color: "#f8fafc",
        }}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{message}
      </p>
    </div>
  );
}

export default ContactEmail;
