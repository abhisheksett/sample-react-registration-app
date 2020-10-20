import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, path, redirectPath, ...rest }) => {
	const isValid = () => {
		const token = sessionStorage.getItem('loggedIn');
		if (token) {
			if (path === '/login' || path === '/') {
				return false;
			}
			return true;
		} else {
			if (path === '/login') {
				return true;
			}
			return false;
		}
	};

	return (
		<Route
			{...rest} //eslint-disable-line
			render={({ location }) =>
				isValid() ? (
					children
				) : (
					<Redirect
						to={{
							pathname: redirectPath,
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
