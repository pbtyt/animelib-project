import React, { useState } from 'react';
import styles from './DropDown.module.css';

import { ChevronDown } from 'lucide-react';

const DropDown = ({
	useTemplate = false,
	template,
	children,
	dropDownTitle,
	button,
	minMenuWidth = '160px',
	topOffset = '35',
	leftOffset = '0',
}) => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className={styles.dropdown} onClick={() => setIsOpened(prev => !prev)}>
			{useTemplate ? (
				template
			) : !button ? (
				<button className={styles.defaultButton}>
					<span style={{ fontSize: '14px' }}>{dropDownTitle}</span>
					<ChevronDown width={16} height={16} strokeWidth={1.8} />
				</button>
			) : (
				button
			)}

			<ul
				className={`${styles.choose} ${isOpened ? styles.opened : ''}`}
				style={{
					minWidth: `${minMenuWidth}`,
					top: `${topOffset}px`,
					left: `${leftOffset}px`,
				}}
			>
				{children}
			</ul>
		</div>
	);
};

export default DropDown;
