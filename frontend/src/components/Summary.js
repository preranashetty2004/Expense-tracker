import React from 'react';

const Summary = () => {
  return (
    <div className="summary">
      <h3>Your Balance: ₹1000</h3>
      <div className="summary-box">
        <div className="income">
          <h4>Income</h4>
          <p className="plus">+₹2000</p>
        </div>
        <div className="expense">
          <h4>Expense</h4>
          <p className="minus">-₹1000</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
