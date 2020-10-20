import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

const Dashboard = () => {
	const history = useHistory();

	const onButtonClick = () => {
		sessionStorage.removeItem('loggedIn');
		history.push('/login');
	};

	return (
		<div>
			<h1>This is Dashboard</h1>
			<Button text="Logout" onButtonClick={onButtonClick} />
		</div>
	);
};

export default Dashboard;
