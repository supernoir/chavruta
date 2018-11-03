import React from 'react';

export default class ProfilePage extends React.Component {
	render(){
		return (
			<article className="page-body">
				<h1>Profile</h1>
				<form class="form-horizontal">
					<div class="form-group">
						<label>{'Username'}</label>
						<input type="text" placeholder={'Username'} defaultValue={'MyUsername'} />
					</div>
				</form>
			</article>
		);
	}
}