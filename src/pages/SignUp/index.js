import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import './style.scss';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import 'react-dropdown/style.css';
import options from '../../data/country';

const URL = 'http://localhost:5000/api/signup';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('male');
	const [country, setCountry] = useState('');
	const history = useHistory();

	const onEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const onFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const onLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const onCountryChange = (e) => {
		setCountry(e.value);
	};

	const onGenderChange = (e) => {
		setGender(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(URL, {
				method: 'post',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({
					email,
					firstName,
					lastName,
					gender,
					country,
				}),
			});

			if (response.ok) {
				history.push('/login');
			} else {
				const err = await response.json();
				alert(err.error);
			}
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<div className="signup">
			<h2>SignUp</h2>
			<form onSubmit={onSubmit}>
				<TextBox
					type="email"
					placeholder="Email"
					onValueChange={onEmailChange}
					value={email}
					required
				/>
				<TextBox
					type="text"
					placeholder="First Name"
					onValueChange={onFirstNameChange}
					value={firstName}
					required
				/>
				<TextBox
					type="text"
					placeholder="Last Name"
					onValueChange={onLastNameChange}
					value={lastName}
					required
				/>
				<Dropdown
					options={options}
					onChange={onCountryChange}
					value={country}
					className="dropdown"
					placeholder="Select c country"
				/>
				;
				<div>
					<Radio
						name="gender"
						label="Male"
						valueChanged={onGenderChange}
						value="male"
						isSelected={gender === 'male'}
					/>
					<Radio
						name="gender"
						label="Female"
						valueChanged={onGenderChange}
						value="female"
						isSelected={gender === 'female'}
					/>
				</div>
				<Button text="Signup" type="submit" />
			</form>

			<Link to="/login">Login</Link>
		</div>
	);
};

export default Signup;
