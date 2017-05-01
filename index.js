'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Table from './components/Table';
import Menu from './components/Menu';
import Card from './components/Card';
import Timeline from './components/Timeline';
import Login from './components/Login';
import Header from './components/Header';

const Home = () => {
  return (
    <article className="page-body">
      <h1>Home</h1>
      <Table />
    </article>
  );
};

const Friends = () => {
  return (
    <article className="page-body">
      <h1>Friends</h1>
      <Card />
    </article>
  );
};

const Matches = () => {
  return (
    <article className="page-body">
      <h1>Matches</h1>
    </article>
  );
};

const History = () => {
  return (
    <article className="page-body">
      <h1>History</h1>
      <Timeline />
    </article>
  );
};

const Profile = () => {
  return (
    <article className="page-body">
      <h1>Profile</h1>
    </article>
  );
};

const LoginForm = () => {
  return (
    <article className="page-body">
      <h1>Login</h1>
      <Login />
    </article>
  );
};

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu />

          <Route exact path="/" component={Home} />
          <Route path="/matches" component={Matches} />
          <Route path="/friends" component={Friends} />
          <Route path="/history" component={History} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginForm} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
