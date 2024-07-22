import React, { useRef } from 'react';

import styles from './NoteModal.module.css';

import { X } from 'lucide-react';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import useModal from '../../hooks/useModal';
import ModalBase from '../ModalBase/ModalBase';

import NoteItem from '../NoteItem/NoteItem';

const NoteModal = () => {
	const contentRef = useRef(null);
	const { hideModal } = useModal();
	return (
		<ModalBase contentRef={contentRef} attachmentPos='right'>
			<div className={styles.modalContent} ref={contentRef}>
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
			</div>
		</ModalBase>
	);
};

export default NoteModal;
