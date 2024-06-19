import React, { useState } from "react";

function InputForm({ setSearchQuery }) {
  const [input, setInput] = useState("");
  const handleSumbit = (e) => {
    if (!input.trim()) return;
    e.preventDefault();
    setSearchQuery(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a movie name..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default InputForm;
