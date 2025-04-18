const Transaction = require('../models/transactionModel');

exports.addTransaction = (req, res) => {
  const { email, title, amount } = req.body;
  Transaction.create(email, title, amount, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Transaction added' });
  });
};

exports.getTransactions = (req, res) => {
  const email = req.params.email;
  Transaction.findAll(email, (err, transactions) => {
    if (err) return res.status(500).send(err);
    res.json(transactions);
  });
};

exports.deleteTransaction = (req, res) => {
  const id = req.params.id;
  Transaction.remove(id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Transaction deleted' });
  });
};
