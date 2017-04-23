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
        <a href="#" className="btn btn-link">
            <Link to="/friends">Friends</Link>
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
            <Link to="/logout">Logout</Link>
        </a>
    </section>
    </header>      
    )
}

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                <Menu />

                <hr/>

                <Route exact path="/" component={Home}/>
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