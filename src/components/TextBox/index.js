/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './style.scss';

const TextBox = ({ type = 'text', onValueChange, placeholder, value, ...props }) => {
	return (
		<div className="textbox">
			<input
				type={type}
				onChange={onValueChange}
				placeholder={placeholder}
				value={value}
				{...props}
			/>
		</div>
	);
};

export default TextBox;
