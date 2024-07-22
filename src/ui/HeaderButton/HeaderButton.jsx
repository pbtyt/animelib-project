import React from 'react';
import styles from './HeaderButton.module.css';

const HeaderButton = ({
	icon,
	text = 'Header Button',
	onClick = () => {},
	additionalStyles = {},
}) => {
	return (
		<button
			className={styles.button}
			style={additionalStyles}
			onClick={onClick}
		>
			{icon}
			{text !== '' ? <span className={styles.buttonText}>{text}</span> : <></>}
		</button>
	);
};

export default HeaderButton;
