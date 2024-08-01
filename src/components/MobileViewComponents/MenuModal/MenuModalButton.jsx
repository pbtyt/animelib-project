import React, { useState } from 'react';
import styles from './MenuModalButton.module.css';

import { ChevronDown, ChevronUp } from 'lucide-react';

const MenuModalButton = ({ menuModalButtonTitle, children }) => {
	const [opened, setOpened] = useState(false);
	return (
		<div className={styles.item}>
			<button
				className={styles.itemButton}
				onClick={() => setOpened(prev => !prev)}
			>
				<span>{menuModalButtonTitle}</span>

				{!opened ? (
					<ChevronDown color='#ebebf580' strokeWidth={2} size={20} />
				) : (
					<ChevronUp color='#ebebf580' strokeWidth={2} size={20} />
				)}
			</button>
			<div
				className={styles.itemList}
				style={!opened ? { display: 'none' } : {}}
			>
				{children}
			</div>
		</div>
	);
};

export default MenuModalButton;
