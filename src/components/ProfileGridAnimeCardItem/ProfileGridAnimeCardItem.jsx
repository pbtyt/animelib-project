import React from 'react';
import styles from './ProfileGridAnimeCardItem.module.css';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import { MoreHorizontal, StickyNote } from 'lucide-react';

import useModal from '../../hooks/useModal';
import NoteModal from '../NoteModal/NoteModal';
import ProfileCardEditModal from '../ProfileCardEditModal/ProfileCardEditModal';

const ProfileGridAnimeCardItem = ({
	imgSrc = '',
	title = 'Магическая битва',
}) => {
	console.warn('[ProfileGridAnimeCardItem]: Re-Render');
	const { showModal } = useModal();

	return (
		<div className={styles.cardWrapper}>
			<div style={{ position: 'relative' }}>
				<img
					src={imgSrc ? imgSrc : './posters/jujutsu-kaisen.jpg'}
					alt='poster'
					className={styles.cardPoster}
				/>

				<div className={styles.buttonsWrapper}>
					<HeaderButton
						icon={
							<MoreHorizontal
								color='#bfbfbf'
								width={16}
								height={16}
								strokeWidth={2}
							/>
						}
						text=''
						onClick={() => showModal(<ProfileCardEditModal />)}
						additionalStyles={{
							backgroundColor: 'rgba(0,0,0,0.85)',
							padding: '6px',
						}}
					/>

					<HeaderButton
						icon={
							<StickyNote
								color='#bfbfbf'
								width={16}
								height={16}
								strokeWidth={2}
							/>
						}
						text=''
						onClick={() => showModal(<NoteModal />)}
						additionalStyles={{
							backgroundColor: 'rgba(0,0,0,0.85)',
							padding: '6px',
						}}
					/>
				</div>
			</div>

			<div className={styles.cardInfo}>
				<span className={styles.title}>{title}</span>
				<span className={styles.status}>Продолжить 12 / 24</span>
			</div>
		</div>
	);
};

export default ProfileGridAnimeCardItem;
