import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setEnteredPlayerName(event.target.value);
  }
  function handleClick(event) {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>
        Welcome {submitted ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
