const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const USERNAME = 'admin';
const PASSWORD = 'admin';
const FULL_NAME = 'Test User';

app.get('/api/login', (req, res) => {
	const { userName, password } = req.query;
	if (userName === USERNAME && password === PASSWORD) {
		return res.status(200).json({ user: FULL_NAME });
	}
	return res.status(401).json({ error: 'Invalid credential !!!' });
});

app.post('/api/signup', (req, res) => {
	const { email, firstName, lastName, gender, country } = req.body;
	if (email && firstName && lastName && gender && country) {
		return res.status(200).json({
			message: 'User created',
			fullName: `${firstName} ${lastName}`,
		});
	}

	return res.status(400).json({ error: 'Something not right !!!' });
});

app.get('/api/dashboard', (req, res) => {});

app.listen(5000, () => {
	console.log('server started at port 5000');
});
