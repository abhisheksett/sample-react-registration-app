import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<ProtectedRoute path="/login" redirectPath="/dashboard">
					<Login />
				</ProtectedRoute>
				<Route path="/signup">
					<SignUp />
				</Route>
				<ProtectedRoute path="/dashboard" redirectPath="/login">
					<Dashboard />
				</ProtectedRoute>
				<ProtectedRoute path="/" redirectPath="/dashboard">
					<Login />
				</ProtectedRoute>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
