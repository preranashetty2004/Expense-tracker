import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    };

    onAddTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div className="form-box">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter description..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Amount (negative = expense, positive = income)</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
