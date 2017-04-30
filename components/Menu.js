import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <a href="#" className="navbar-brand mr-10">
          <Link to="/">chavruta.io</Link>
        </a>
        <a href="#" className="btn btn-link">
          <Link to="/">Home</Link>
        </a>
        <a href="#" className="btn btn-link badge" data-badge="8">
          <Link to="/matches">Matches</Link>
        </a>
        <a href="#" className="btn btn-link">
          <Link to="/friends">Friends</Link>
        </a>
        <a href="#" className="btn btn-link">
          <Link to="/history">History</Link>
        </a>
        <a href="#" className="btn btn-link">
          <Link to="/profile">Profile</Link>
        </a>
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="Search" />
          <button className="btn btn-primary input-group-btn">Search</button>
        </div>
        <a href="#" className="btn btn-link">
          <Link to="/login">Login</Link>
        </a>
      </section>
    </header>
  );
};

export default Menu;
