import React, { useRef, useState } from 'react';
import styles from './FolderEditModal.module.css';

import { Menu, Plus, X } from 'lucide-react';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';

import useLocalStorage from '../../hooks/useLocalStorage';

import useModal from '../../hooks/useModal';
import Input from '../../ui/Input/Input';
import ModalBase from '../ModalBase/ModalBase';

const FolderEditModal = () => {
	console.warn('[FolderEditModal]: Re-Render');
	const contentRef = useRef(null);
	const { hideModal } = useModal();
	//NOTE: Only For TEST
	const { setValue, storedValue } = useLocalStorage('folder', {});

	const [inputValue, setInputValue] = useState('');
	return (
		<ModalBase contentRef={contentRef}>
			<div className={styles.modalContent} ref={contentRef}>
				<div className={styles.titleWrapper}>
					<span className={styles.title}>Редактирование списков</span>
					<HeaderButton
						icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
						text=''
						onClick={() => hideModal()}
					/>
				</div>
				<div>
					{storedValue['UserFolders'].map((element, index) => (
						<div className={styles.folderItem} key={element.id}>
							<span>{element.name}</span>
							<Menu color='#bfbfbf' width={16} height={16} strokeWidth={2} />
						</div>
					))}
				</div>
				<div className={styles.modalFooter}>
					<Input
						inputValue={inputValue}
						setInputValue={setInputValue}
						needClearIcon={false}
						icon={<></>}
						additionalStyles={{ border: 'none', height: '44px', flexGrow: '1' }}
						placeholder='Создать новую папку'
					/>
					<HeaderButton
						icon={
							<Plus color='#bfbfbf' width={16} height={16} strokeWidth={3} />
						}
						text=''
						additionalStyles={{ padding: '.5rem' }}
						needHoverStyles={false}
						onClick={() => {
							const lastUsedFolderID = storedValue['UserFolders'].at(-1).id;
							storedValue['UserFolders'].push({
								id: lastUsedFolderID + 1,
								name: inputValue,
								color: '#d04ae8',
								count: 0,
							});
							setValue({
								UserFolders: storedValue['UserFolders'],
							});
						}}
					/>
				</div>
			</div>
		</ModalBase>
	);
};

export default FolderEditModal;
