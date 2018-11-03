import React from 'react';
import UserList from './UserList';

const users = [
	{
		name     : 'Jael Bat Meir',
		location : 'Paris, France',
		gender   : 'Female',
		interests: 'Mishna Yomit'
	},
	{
		name     : 'Miriam bat Avraham',
		location : 'Berlin, Germany',
		gender   : 'Female',
		interests: 'Kuzari'
	},
	{
		name     : 'Rachel Levy',
		location : 'New York City, USA',
		gender   : 'Female',
		interests: 'Mishna Yomit'
	},
	{
		name     : 'Ayelet Shahar',
		location : 'Jerusalem, Israel',
		gender   : 'Female',
		interests: 'Kuzari'
	}
];

class Table extends React.Component {
	render() {
		return (
			<table className="table">
				<TableHead />
				<TableRows />
			</table>
		);
	}
}

let TableHead = () => {
	return (
		<thead className="table-head">
			<tr>
				<th>Name</th>
				<th>Location</th>
				<th>Gender</th>
				<th>Interests</th>
			</tr>
		</thead>
	);
};

class TableRows extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: users
		};
	}

	render() {
		return (
			<tbody className="table-body">
				{this.state.users.map(user => <UserList key={user.id} name={user.name} location={user.location} gender={user.gender} interests={user.interests} />)}
			</tbody>
		);
	}
}

export default Table;
