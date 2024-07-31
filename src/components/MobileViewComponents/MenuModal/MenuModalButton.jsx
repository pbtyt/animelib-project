import React, { useState } from 'react';

import styles from './MenuModalButton.module.css';

const MenuModalButton = ({ icon }) => {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<button
				className={`${styles.item} ${opened ? styles.opened : ''}`}
				onClick={() => setOpened(prev => !prev)}
			>
				<span>Профиль</span>
				{icon}
			</button>
			<div style={!opened ? { display: 'none' } : {}}>some</div>
		</>
	);
};

export default MenuModalButton;
