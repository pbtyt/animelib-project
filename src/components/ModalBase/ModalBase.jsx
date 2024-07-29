import React, { useRef } from 'react';
import styles from './ModalBase.module.css';

import useModal from '../../hooks/useModal';

const ModalBase = ({
	attachmentPos = 'left',
	alignPos = 'center',
	modalWindowWidth,
	modalWindowHeight = 'unset',
	offsetSettings = {},
	additionalStyles = {},
	children,
}) => {
	const { hideModal } = useModal();
	const modalRef = useRef(null);
	return (
		<div
			className={`
				${styles.modalWrapper} 
				${attachmentPos === 'left' ? styles.left : styles.right}
			`}
			onClick={e => {
				if (modalRef.current && !modalRef.current.contains(e.target)) {
					hideModal();
				}
			}}
		>
			<div
				className={`
					${styles.modalContent}
					${alignPos === 'center' ? styles.center : styles.top}
				`}
				style={{
					width: modalWindowWidth,
					height: modalWindowHeight,
					marginTop: offsetSettings?.top || '0px',
					marginBottom: offsetSettings?.bottom || '0px',
					...additionalStyles,
				}}
				ref={modalRef}
			>
				{children}
			</div>
		</div>
	);
};

export default ModalBase;
