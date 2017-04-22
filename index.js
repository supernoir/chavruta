'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';

import UserList from './components/UserList'

const users = [
    {
      "name": "Jael Bat Meir",
      "location": "Paris, France",
      "gender": "Female",
      "interests": "Mishna Yomit"
    },
    {
      "name": "Miriam bat Avraham",
      "location": "Berlin, Germany",
      "gender": "Female",
      "interests": "Kuzari"
    },
    {
      "name": "Rachel Levy",
      "location": "New York City, USA",
      "gender": "Female",
      "interests": "Mishna Yomit"
    },
    {
      "name": "Ayelet Shahar",
      "location": "Jerusalem, Israel",
      "gender": "Female",
      "interests": "Kuzari"
    },
]

class App extends React.Component {
    constructor(){
        super()
    }
    render(){
        return (
        <Router history={hashHistory}>
            <Route path='/' component={Feed} />
            <Route path='/newpost' component={NewPost} />
            <Route path='/login' component={Login} />
            <Route path='*' component={NotFound} />
        </Router>
            <div>
                <h1>Chavruta</h1>
                <Table />
            </div>
        )
    }
}

let Table = () => {
    return (
        <table>
            <TableHead />
            <TableRows />
        </table>
    )
}

let TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Interests</th>
            </tr>
        </thead>
    )
}

class TableRows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: users
        }
    }

    render() {
        return (
            <tbody>
            {this.state.users.map((user) => (
                <UserList key={user.id} name={user.name} location={user.location} gender={user.gender} interests={user.interests} />
            ))}
            </tbody>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('app')
)

export default App