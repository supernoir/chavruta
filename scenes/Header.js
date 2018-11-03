import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header className="navbar">
				<section className="navbar-section">
					<Link to="/" className="navbar-brand mr-2"><h1>חַבְרוּתָא</h1></Link>
					<Link to="/matches">Matches</Link>
					<Link to="/friends">Friends</Link>
					<Link to="/history">History</Link>
					<Link to="/sessions">Sessions</Link>
					<Link to="/profile">Profile</Link>
				</section>
				<section className="navbar-section">
					<div className="input-group input-inline">
						<input className="form-input" type="text" placeholder="search"/>
						<button className="btn btn-primary input-group-btn">Search</button>
					</div>
				</section>
			</header>
		);
	}
}

export default Header;
