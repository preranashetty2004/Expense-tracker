// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar';
import Summary from './components/Summary';
import TransactionForm from './components/Transactionform';
import TransactionList from './components/TransactionList';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((txn) => txn.id !== id));
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setBudget(0);
    setTransactions([]);
  };

  return (
    <Router>
      <div className="container">
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <>
                  <Summary
                    budget={budget}
                    remaining={remaining}
                    totalSpent={-totalSpent}
                    onSetBudget={handleSetBudget}
                  />
                  <TransactionForm onAddTransaction={addTransaction} />
                  <TransactionList
                    transactions={transactions}
                    onDeleteTransaction={deleteTransaction}
                  />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
