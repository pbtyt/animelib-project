import React from 'react';
import styles from './DropDown.module.css';

import { ChevronDown } from 'lucide-react';
import { useOutside } from '../../hooks/useOutside';

const DropDown = ({
	useTemplate = false,
	template,
	children,
	dropDownTitle,
	button,
	minMenuWidth = '160px',
	topOffset = '35',
	leftOffset = '0',
	menuAdditionalStyles = {},
}) => {
	const { isShow, setIsShow, ref } = useOutside(false);
	return (
		<div
			ref={ref}
			className={styles.dropdown}
			onClick={() => {
				setIsShow(true);
			}}
		>
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
				className={`${styles.choose} ${isShow ? styles.opened : ''}`}
				style={{
					minWidth: `${minMenuWidth}`,
					top: `${topOffset}px`,
					left: `${leftOffset}px`,
					...menuAdditionalStyles,
				}}
			>
				{children}
			</ul>
		</div>
	);
};

export default DropDown;
