import React from 'react';

class Login extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<form>
				<div className="form-group">
					<label className="form-label" for="input-example-1">
						Username
					</label>
					<input className="form-input" type="text" id="input-example-1" placeholder="Username" />
				</div>
				<div className="form-group">
					<label className="form-label" for="input-example-1">
						Password
					</label>
					<input className="form-input" type="password" id="input-example-1" placeholder="Password" />
				</div>
				<div className="form-group">
					<button className="btn btn-lg">Log in</button>
				</div>
			</form>
		);
	}
}

export default Login;
