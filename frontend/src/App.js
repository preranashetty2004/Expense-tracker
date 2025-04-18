import React, { useState } from 'react';
import "./App.css"
import Navbar from './components/navbar';
import Summary from './components/Summary';
import TransactionForm from './components/Transactionform';
import TransactionList from './components/TransactionList';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const totalSpent = transactions.reduce((acc, txn) => acc + txn.amount, 0);
  const remaining = budget + totalSpent;

  const handleSetBudget = (amount) => {
    setBudget(parseFloat(amount));
  };

  const addTransaction = (transaction) => {
    if (transaction.amount < 0 && Math.abs(transaction.amount) > remaining) {
      alert("Expense exceeds remaining budget!");
      return;
    }

    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="container">
      <Navbar />
      <Summary
        budget={budget}
        remaining={remaining}
        totalSpent={-totalSpent}
        onSetBudget={handleSetBudget}
      />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;