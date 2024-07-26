import React from 'react';
import styles from './HeaderButton.module.css';

const HeaderButton = ({
	icon,
	text = 'Header Button',
	onClick = () => {},
	needHoverStyles = true,
	additionalStyles = {},
}) => {
	return (
		<button
			className={`${styles.button} ${needHoverStyles ? styles.hover : ''}`}
			style={additionalStyles}
			onClick={onClick}
		>
			{icon}
			{text !== '' ? <span className={styles.buttonText}>{text}</span> : <></>}
		</button>
	);
};

export default HeaderButton;
