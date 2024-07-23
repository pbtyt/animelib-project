import React, { useEffect, useRef, useState } from 'react';
import styles from './GradeModal.module.css';

import useModal from '../../hooks/useModal';
import ModalBase from '../ModalBase/ModalBase';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import { X } from 'lucide-react';
import Button from '../../ui/Button/Button';
import Start from './Star';

const GradeModal = () => {
	const contentRef = useRef(null);
	const { hideModal } = useModal();

	const [clickedStarIndex, setClickedStarIndex] = useState(0);
	const [grade, setGrade] = useState(0);

	useEffect(() => {}, [clickedStarIndex]);

	return (
		<ModalBase contentRef={contentRef}>
			<div className={styles.modalContent} ref={contentRef}>
				<div className={styles.titleWrapper}>
					<span className={styles.title}>Оценка тайтла</span>
					<HeaderButton
						icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
						text=''
						onClick={() => hideModal()}
					/>
				</div>

				<div
					style={{
						backgroundColor: '#7878805c',
						padding: '20px 15px',
						color: '#ebebf580',
						textAlign: 'center',
						fontSize: '12px',
					}}
				>
					{grade === 0 ? (
						<span>Поставьте оценку</span>
					) : (
						<span style={{ color: '#fff', fontSize: '27px' }}>{grade}</span>
					)}
				</div>

				<div
					style={{
						padding: '0 12px',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					{[...new Array(10)].map((_, index) => (
						<Start
							stared={index <= clickedStarIndex && grade != 0}
							index={index}
							key={index}
							onClick={() => {
								setClickedStarIndex(index);
								setGrade(index + 1);
							}}
						/>
					))}
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '.8rem',
						padding: '0 12px 16px 12px',
					}}
				>
					<Button
						styleIndex={1}
						additionalStyles={{
							backgroundColor: '#282829',
							color: '#a0a3a7',
							fontWeight: '500',
							flexGrow: '1',
							justifyContent: 'center',
						}}
						onClick={() => hideModal()}
					>
						<span>Отмена</span>
					</Button>
					<Button
						styleIndex={1}
						additionalStyles={{
							backgroundColor: '#1565c0',
							fontWeight: '500',
							flexGrow: '1',
							justifyContent: 'center',
						}}
						onClick={() => {
							hideModal();
						}}
					>
						<span>Оценить</span>
					</Button>
				</div>
			</div>
		</ModalBase>
	);
};

export default GradeModal;
