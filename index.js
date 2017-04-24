'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Table from './components/Table'

const Home = () => {
    return (
    <div>
        <h1>Home</h1>
        <Table />
    </div>
    )
}

const Friends = () => {
    return (
        <article>
            <h1>Friends</h1>
        </article>
    )
}

const Matches = () => {
    return (
        <article>
            <h1>Matches</h1>
        </article>
    )
}

const Profile = () => {
    return (
        <article>
            <h1>Profile</h1>
        </article>
    )
}

const Login = () => {
    return (
        <article>
            <h1>Login</h1>
        </article>
    )
}

∏

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                <Menu />

                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/matches" component={Matches}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/profile" component={Profile}/>
                </div>
            </Router>
        )
    }
}





ReactDOM.render(
    <App />, document.getElementById('app')
)

export default App