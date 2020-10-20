import React from 'react';
import './style.scss';

const Radio = ({ valueChanged, value, isSelected, label, name }) => {
	const id = Math.floor(Math.random() * 1000000000);
	return (
		<div className="radio">
			<input
				name={name}
				id={id}
				onChange={valueChanged}
				value={value}
				type="radio"
				checked={isSelected}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default Radio;
