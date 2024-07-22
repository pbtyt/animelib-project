import React, { useRef } from 'react';

import styles from './NoteModal.module.css';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import ModalBase from '../ModalBase/ModalBase';

import { ChevronDown, Edit2, X } from 'lucide-react';
import Button from '../../ui/Button/Button';

const NoteModal = () => {
	const contentRef = useRef(null);
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
					<div className={styles.note}>
						<Edit2 color='#ebebf580' width={14} height={14} strokeWidth={3} />
						<span>Том 4 Глава 3</span>
						<div style={{ flexGrow: '1' }}></div>
						<Button
							styleIndex={0}
							additionalStyles={{
								backgroundColor: 'transparent',
								gap: '1rem',
							}}
						>
							1
							<ChevronDown
								color='#bfbfbf'
								width={14}
								height={14}
								strokeWidth={2}
							/>
						</Button>
					</div>

					<div className={styles.note}>
						<Edit2 color='#ebebf580' width={14} height={14} strokeWidth={3} />
						<span>Том 4 Глава 6</span>
						<div style={{ flexGrow: '1' }}></div>
						<Button
							styleIndex={0}
							additionalStyles={{
								backgroundColor: 'transparent',
								gap: '1rem',
							}}
						>
							1
							<ChevronDown
								color='#bfbfbf'
								width={14}
								height={14}
								strokeWidth={2}
							/>
						</Button>
					</div>
				</div>
			</div>
		</ModalBase>
	);
};

export default NoteModal;
