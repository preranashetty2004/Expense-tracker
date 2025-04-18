import React, { useState } from 'react';

const Summary = ({ budget, remaining, totalSpent, onSetBudget }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSetBudget(input);
    setInput('');
  };

  return (
    <div className="summary">
      <h2>Budget Overview</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Set your budget (e.g., ₹10000)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Set Budget</button>
      </form>

      <div className="budget-info">
        <p><strong>Total Budget:</strong> ₹{budget}</p>
        <p><strong>Total Spent:</strong> ₹{totalSpent}</p>
        <p><strong>Remaining:</strong> ₹{remaining}</p>
      </div>
    </div>
  );
};

export default Summary;
