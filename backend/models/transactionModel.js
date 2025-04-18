const db = require('./db');

exports.create = (email, title, amount, callback) => {
  const query = 'INSERT INTO transactions (email, title, amount) VALUES (?, ?, ?)';
  db.query(query, [email, title, amount], callback);
};

exports.findAll = (email, callback) => {
  const query = 'SELECT * FROM transactions WHERE email = ?';
  db.query(query, [email], callback);
};

exports.remove = (id, callback) => {
  const query = 'DELETE FROM transactions WHERE id = ?';
  db.query(query, [id], callback);
};
