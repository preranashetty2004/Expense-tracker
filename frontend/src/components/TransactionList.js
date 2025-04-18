import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>History</h3>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id} className={txn.amount >= 0 ? "plus" : "minus"}>
            {txn.text} - <span>{txn.amount >= 0 ? "+" : ""}₹{txn.amount}</span> - 
            <span className="category">{txn.category}</span>
            <button
              className="delete-btn"
              onClick={() => onDeleteTransaction(txn.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
