import React, { useState } from 'react';
import styles from './NoteItem.module.css';

import { ChevronDown, Edit2 } from 'lucide-react';

import Button from '../../ui/Button/Button';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import useModal from '../../hooks/useModal';
import NoteEditModal from '../NoteEditModal/NoteEditModal';
import NoteSubitem from '../NoteSubitem/NoteSubitem';

const NoteItem = () => {
	const { showModal } = useModal();
	const [showNoteSubitems, setShowNoteSubitems] = useState(false);
	return (
		<div className={styles.noteWrapper}>
			<div className={styles.note}>
				<HeaderButton
					icon={
						<Edit2 color='#ebebf580' width={14} height={14} strokeWidth={3} />
					}
					text=''
					onClick={() => showModal(<NoteEditModal />)}
				/>
				<span>Том 4 Глава 3</span>
				<div style={{ flexGrow: '1' }}></div>
				<Button
					styleIndex={0}
					additionalStyles={{
						backgroundColor: 'transparent',
						gap: '1rem',
					}}
					onClick={() => setShowNoteSubitems(prev => !prev)}
				>
					1
					<ChevronDown color='#bfbfbf' width={14} height={14} strokeWidth={2} />
				</Button>
			</div>

			{showNoteSubitems ? <NoteSubitem /> : <></>}
		</div>
	);
};

export default NoteItem;
