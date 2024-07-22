import React from 'react';

const Button = ({
	styleIndex = 0,
	additionalStyles = {},
	onClick = () => {},
	children,
}) => {
	const buttonStyles = [
		{
			border: '1px solid rgba(80, 80, 80, .5)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '.3rem',
			padding: '4px 10px',
			backgroundColor: '#2C2C30',
		},
		{
			display: 'flex',
			alignItems: 'center',
			gap: '.5rem',
			backgroundColor: '#4baf50',
			color: 'white',
			fontFamily: 'inherit',
			fontSize: '15px',
			padding: '2px 15px',
			lineHeight: '30px',
			userSelect: 'none',
		},
	];
	return (
		<button
			style={Object.assign(buttonStyles[styleIndex], additionalStyles)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
