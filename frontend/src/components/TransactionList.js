import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id} className={txn.amount >= 0 ? 'plus' : 'minus'}>
            {txn.text} 
            <span>{txn.amount >= 0 ? '+' : ''}₹{txn.amount}</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
