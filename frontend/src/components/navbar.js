import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <h2>💸 Expense Tracker</h2>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
