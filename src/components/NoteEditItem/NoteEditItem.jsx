import React from 'react';
import styles from './NoteEditItem.module.css';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import { Trash2 } from 'lucide-react';

const NoteEditItem = ({ onTrashClick = () => {} }) => {
	return (
		<div className={styles.noteEdit}>
			<div className={styles.noteEditHeader}>
				<span style={{ color: '#ebebf580', fontWeight: '500' }}>Параграф:</span>
				<span>1</span>
				<div style={{ flexGrow: '1' }}></div>
				<HeaderButton
					icon={
						<Trash2 color='#bfbfbf' width={16} height={16} strokeWidth={2} />
					}
					text=''
					onClick={() => onTrashClick()}
				/>
			</div>

			<textarea
				tabIndex={2}
				rows={2}
				maxLength={200}
				placeholder='Текст заметки'
				style={{ resize: 'none', minHeight: '78px' }}
			></textarea>
			<div className={styles.charCountWrapper}>
				<span>12</span>
				<span>/</span>
				<span>200</span>
			</div>
		</div>
	);
};

export default NoteEditItem;
