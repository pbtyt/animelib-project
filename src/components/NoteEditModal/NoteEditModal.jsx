import React, { useRef, useState } from 'react';
import styles from './NoteEditModal.module.css';

import { Save, Trash, X } from 'lucide-react';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import useModal from '../../hooks/useModal';
import Button from '../../ui/Button/Button';
import ModalBase from '../ModalBase/ModalBase';
import NoteEditItem from '../NoteEditItem/NoteEditItem';

const NoteEditModal = () => {
	const contentRef = useRef(null);
	const { hideModal } = useModal();

	const [noteCount, setNoteCount] = useState(1);
	return (
		<ModalBase contentRef={contentRef} attachmentPos='right'>
			<div className={styles.modalContent} ref={contentRef}>
				<div className={styles.titleWrapper}>
					<span className={styles.title}>Заметки</span>
					<HeaderButton
						icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
						text=''
						onClick={() => hideModal()}
					/>
				</div>
				{/*  */}
				{/*  */}
				<div className={styles.notesEditWrapper}>
					{[...new Array(noteCount)].map((_, index) => (
						<NoteEditItem
							key={index}
							onTrashClick={() =>
								setNoteCount(prevNoteCount => prevNoteCount - 1)
							}
						/>
					))}
				</div>
				<Button
					styleIndex={0}
					onClick={() => setNoteCount(prevNoteCount => prevNoteCount + 1)}
				>
					<span style={{ fontSize: '16px' }}>+ Добавить ещё заметку</span>
				</Button>
				<div className={styles.notesEditButtons}>
					<Button
						styleIndex={1}
						additionalStyles={{ flexGrow: '1', justifyContent: 'center' }}
						onClick={() => hideModal()}
					>
						<Save size={16} color='white' strokeWidth={2} />
						<span>Сохранить</span>
					</Button>
					<Button
						styleIndex={1}
						additionalStyles={{
							backgroundColor: 'rgba(222, 112, 114, .1)',
							color: '#de7072',
							padding: '10px',
						}}
						onClick={() => setNoteCount(0)}
					>
						<Trash size={16} color='#de7072' strokeWidth={2} />
					</Button>
				</div>
			</div>
		</ModalBase>
	);
};

export default NoteEditModal;
