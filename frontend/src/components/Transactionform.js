import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
      category
    };

    onAddTransaction(newTransaction);
    setText('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <div className="form-box">
      <h3>Transactions</h3>
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
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
