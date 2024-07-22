import React, { useState } from 'react';
import styles from './Input.module.css';

import { Search, X } from 'lucide-react';

const Input = ({
	additionalStyles = {},
	placeholder = 'Поиск по названию',
	type = 'text',
	inputmode = '',
	minValue = '',
	maxValue = '',
	padding = '8',
	icon = null,
}) => {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className={styles.inputWrapper} style={additionalStyles}>
			{!icon ? (
				<Search color='rgba(235, 235, 245, .5)' strokeWidth={2} size={17} />
			) : (
				icon
			)}

			<input
				type={type}
				inputMode={inputmode}
				placeholder={placeholder}
				min={minValue}
				max={maxValue}
				value={inputValue}
				className={styles.input}
				onChange={event => {
					setInputValue(event.target.value);
				}}
			/>
			{inputValue.length > 0 ? (
				<X
					size={12}
					color='#bfbfbf'
					strokeWidth={2}
					style={{ cursor: 'pointer' }}
					onClick={() => {
						setInputValue('');
					}}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default Input;
