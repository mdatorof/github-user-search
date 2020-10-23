import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <nav className="navbar-container">
      <Link to="/">
          <div className="navbar-brand">
              <span> Bootcamp DevSuperior </span>
          </div>
      </Link>
  </nav>
);

export default Navbar;