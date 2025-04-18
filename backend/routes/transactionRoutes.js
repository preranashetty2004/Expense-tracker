const express = require('express');
const {
  addTransaction,
  getTransactions,
  deleteTransaction
} = require('../controllers/transactionController');
const router = express.Router();

router.post('/', addTransaction);
router.get('/:email', getTransactions);
router.delete('/:id', deleteTransaction);

module.exports = router;
