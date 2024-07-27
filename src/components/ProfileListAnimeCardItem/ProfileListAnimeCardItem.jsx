import { MoreHorizontal, StickyNote } from 'lucide-react';
import React from 'react';
import useModal from '../../hooks/useModal';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import NoteModal from '../NoteModal/NoteModal';
import ProfileCardEditModal from '../ProfileCardEditModal/ProfileCardEditModal';
import styles from './ProfileListAnimeCardItem.module.css';

const ProfileListAnimeCardItem = () => {
	const { showModal } = useModal();

	return (
		<div className={styles.cardWrapper}>
			<img
				src='./posters/jujutsu-kaisen.jpg'
				alt='poster'
				className={styles.cardPoster}
				width={62}
				height={86}
			/>

			<div className={styles.cardInfoWrapper}>
				<span className={styles.cardTitle}>Магическая Битва</span>
				<div>
					<span className={styles.cardLastEpisode}>Последняя серия 24</span>
				</div>
				<span className={styles.cardContinueEpisode}>Продолжить 12 / 24</span>
			</div>
			<div className={styles.addInfoWrapper}>
				<span>Добавлено</span>
				<span>04.01.2019</span>
			</div>

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
				/>
			</div>
		</div>
	);
};

export default ProfileListAnimeCardItem;
