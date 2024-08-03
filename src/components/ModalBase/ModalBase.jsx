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
	appearanceAnimationClassName = '',
	disappearanceAnimationClassName = '',
	children,
}) => {
	const { hideModal } = useModal();
	const modalRef = useRef(null);

	const handleAnimationEnd = event => {
		console.warn('[handleAnimationEnd] Invoke');
		if (event.animationName === disappearanceAnimationClassName) {
			hideModal();
		}
	};

	return (
		<div
			className={`
				${styles.modalWrapper} 
				${attachmentPos === 'left' ? styles.left : styles.right}
			`}
			onClick={e => {
				if (modalRef.current && !modalRef.current.contains(e.target)) {
					modalRef.current.classList.remove(appearanceAnimationClassName);
					modalRef.current.classList.add(disappearanceAnimationClassName);
				}
			}}
		>
			<div
				onAnimationEnd={event => handleAnimationEnd(event)}
				className={`
					${styles.modalContent}
					${alignPos === 'center' ? styles.center : styles.top}
					${appearanceAnimationClassName}
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
