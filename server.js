'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 8082;
app.use(cors());

// External files
const users = require('./Users');
const sessionsData = require('./data/sessions.json');

app.get('/users', (req, res) => {
	res.json({
		users: users.users
	});
});

app.get('/sessions', (req, res) => {
	res.json({
		sessions: sessionsData.sessions
	});
});

app.listen(port);
console.log('Server listening on port ' + port);
