import React, { useState } from "react";
import CustomAlert from "../components/CustomAlert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");

        // Show the custom alert when the message is successfully sent
        setShowAlert(true);

        // Hide the custom alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } else {
        console.error("An error occurred");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>

        <div>
          {showAlert && <CustomAlert />}
          <form onSubmit={handleSubmit}>
            <p>
              Connect with Me! Submit Your Details and Send a Direct Email to
              My Inbox.
            </p>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    </>
  );
};

export default Contact;
