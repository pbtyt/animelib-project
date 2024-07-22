import React from 'react';
import styles from './ModalBase.module.css';

import useModal from '../../hooks/useModal';

const ModalBase = ({ attachmentPos = 'left', children, contentRef = null }) => {
	const { hideModal } = useModal();
	return (
		<div
			className={`${styles.modalWrapper} ${
				attachmentPos === 'left' ? styles.left : styles.right
			}`}
			onClick={e => {
				if (contentRef.current && !contentRef.current.contains(e.target)) {
					hideModal();
				}
			}}
		>
			{children}
		</div>
	);
};

export default ModalBase;
