import { useState } from "react";

export default function Lottery() {
  // State to store the ticket (array of 3 digits)
  const [ticket, setTicket] = useState([0, 0, 0]);
  const [message, setMessage] = useState("");

  // Function to generate a 3-digit ticket
  function generateTicket() {
    const newTicket = [
      Math.floor(Math.random() * 10), // digit 1
      Math.floor(Math.random() * 10), // digit 2
      Math.floor(Math.random() * 10)  // digit 3
    ];

    setTicket(newTicket);

    // Calculate sum of digits
    const sum = newTicket.reduce((a, b) => a + b, 0);

    // Check if user won
    if (sum === 15) {
      setMessage("🎉 Congratulations! You won the lottery!");
    } else {
      setMessage("😢 Sorry, try again.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Lottery Ticket: {ticket.join("")}</h2>
      <button onClick={generateTicket}>Get New Ticket</button>
      <h3>{message}</h3>
    </div>
  );
}
