import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Menu = () => {
	return (
		<header className="navbar">
			<section className="navbar-section">
				<button href="#" className="btn">
					<Link to="/">Home</Link>
				</button>

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
