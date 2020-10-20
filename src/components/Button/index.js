/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './style.scss';

const Button = ({ onButtonClick, text, ...props }) => {
	return (
		<div className="button">
			<button type="button" onClick={onButtonClick} {...props}>
				{text}
			</button>
		</div>
	);
};

export default Button;
