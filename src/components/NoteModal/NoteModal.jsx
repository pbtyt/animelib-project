import React from 'react';

import styles from './NoteModal.module.css';

import { X } from 'lucide-react';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import useModal from '../../hooks/useModal';
import ModalBase from '../ModalBase/ModalBase';

import NoteItem from '../NoteItem/NoteItem';

const NoteModal = () => {
	const { hideModal } = useModal();
	return (
		<ModalBase
			attachmentPos='right'
			additionalStyles={{
				borderRadius: '0',
				margin: '0',
				padding: '18px',
				alignSelf: 'unset',
				display: 'flex',
				flexDirection: 'column',
				gap: '.8rem',
			}}
			modalWindowWidth={'550px'}
		>
			<div className={styles.titleWrapper}>
				<span className={styles.title}>Редактирование тайтла</span>
				<HeaderButton
					icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
					text=''
					onClick={() => hideModal()}
				/>
			</div>

			<div className={styles.animeCardWrapper}>
				<img
					src='./posters/jujutsu-kaisen.jpg'
					alt='poster'
					className={styles.cardPoster}
					width={62}
					height={86}
					style={{ borderRadius: '6px' }}
				/>
				<div className={styles.animeCardInfo}>
					<span className={styles.infoStatus}>Читаю</span>
					<span className={styles.infoTitle}>Магическая битва</span>
					<span className={styles.infoNoteCount}>Всего заметок: 2</span>
				</div>
			</div>

			<div className={styles.notesWrapper}>
				<NoteItem />
				<NoteItem />
				<NoteItem />
			</div>
		</ModalBase>
	);
};

export default NoteModal;
