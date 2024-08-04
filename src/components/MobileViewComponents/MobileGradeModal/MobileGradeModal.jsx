import React, { useState } from 'react';
import styles from './MobileGradeModal.module.css';

import { X } from 'lucide-react';

import Start from '../../GradeModal/Star';

import Button from '../../../ui/Button/Button';
import HeaderButton from '../../../ui/HeaderButton/HeaderButton';

import useModal from '../../../hooks/useModal';
import ModalBase from '../../ModalBase/ModalBase';

const MobileGradeModal = () => {
	const [clickedStarIndex, setClickedStarIndex] = useState(0);
	const [grade, setGrade] = useState(0);

	const { hideModal } = useModal();
	return (
		<ModalBase
			modalWindowWidth='100%'
			additionalStyles={{
				alignSelf: 'flex-end',
				margin: '0',
				backgroundColor: 'transparent',
				padding: '0 8px 8px',
			}}
			appearanceAnimationClassName={styles.appearance}
			disappearanceAnimationClassName={styles.disappearance}
		>
			<div className={styles.wrapper}>
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
						padding: '24px 12px',
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
							height: '40px',
						}}
						onClick={() => hideModal()}
					>
						<span>Отмена</span>
					</Button>
					<Button
						styleIndex={1}
						additionalStyles={{
							backgroundColor: '#5e35b1',
							fontWeight: '500',
							flexGrow: '1',
							justifyContent: 'center',
							height: '40px',
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

export default MobileGradeModal;
