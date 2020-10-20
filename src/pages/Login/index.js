import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

const URL = 'http://localhost:5000/api/login';

const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const onValueChange = (event) => {
		setUserName(event.target.value);
	};

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const onButtonClick = async () => {
		try {
			const response = await fetch(`${URL}?userName=${userName}&password=${password}`, {
				method: 'get',
				headers: { 'content-type': 'application/json' },
			});

			if (response.ok) {
				sessionStorage.setItem('loggedIn', true);
				history.push('/dashboard');
			} else {
				const err = await response.json();
				sessionStorage.removeItem('loggedIn');
				alert(err.error);
			}
		} catch (e) {
			sessionStorage.removeItem('loggedIn');
			alert(e.message);
		}
	};

	return (
		<div className="login">
			<h2>Login</h2>
			<TextBox type="text" placeholder="Username" onValueChange={onValueChange} />
			<TextBox type="password" placeholder="Password" onValueChange={onPasswordChange} />
			<Button text="Login" onButtonClick={onButtonClick} />
			<Link to="/signup">SignUp</Link>
		</div>
	);
};

export default Login;
