import React, { useState } from 'react';
import "./App.css"
import Navbar from './components/navbar';
import Summary from './components/Summary';
import TransactionForm from './components/Transactionform';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction= (transaction) =>{
    setTransactions([transaction, ...transactions]);

  }
  return (
    <div className="container">
      <Navbar />
      <Summary transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
  
}

export default App;
