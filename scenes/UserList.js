import React from 'react';

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.props = {
			id       : this.props.id,
			name     : this.props.name,
			location : this.props.location,
			gender   : this.props.gender,
			interests: this.props.interests
		};
	}

	render() {
		return (
			<tr className="table-row">
				<td>{this.props.name}</td>
				<td>{this.props.location}</td>
				<td>{this.props.gender}</td>
				<td>{this.props.interests}</td>
			</tr>
		);
	}
}

export default UserList;
