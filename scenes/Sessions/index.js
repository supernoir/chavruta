import React from 'react';
import axios from 'axios';
import './../../public/img/dafyomi.jpg';

export default class SessionsPage extends React.Component {
	constructor(){
		super();
		this.state = {
			sessions: []
		};
	}
	getAllSessions(){
  	axios({
  		method      : 'get',
  		url         : 'http://localhost:8082/sessions',
  		responseType: 'json'
  	})
  		.then((res) => {
				console.log(res.data.sessions);
				this.setState({
					sessions: res.data.sessions
				});
  		});
	}

	componentWillMount(){
		this.getAllSessions();
	}

	render(){
		return (
			<article className="page-body">
				<h1>Sessions</h1>
				{this.state.sessions.map(session => {
					return (<div className="card">
						<div className="card-image">
							<img src={'./../../public/img/dafyomi.jpg'} className="img-responsive"/>
						</div>
						<div className="card-header">
							<div className="card-title h5">{`Session with ${session.chavruta.name}`}</div>
							<div className="card-subtitle text-gray">{`Date ${session.date}`}</div>
						</div>
						<div className="card-body">
							<ul>
								{session.progress.map(task => {
									return  <li>{task.type}</li>;
								})}
							</ul>
						</div>
						<div className="card-footer">
							{`Date: ${session.date}`}
						</div>
					</div>);
				})}
			</article>
		);
	}
}