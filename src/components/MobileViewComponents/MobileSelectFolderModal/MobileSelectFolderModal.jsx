import React, { useState } from 'react';
import styles from './MobileSelectFolderModal.module.css';

import { Plus } from 'lucide-react';
import HeaderButton from '../../../ui/HeaderButton/HeaderButton';
import Input from '../../../ui/Input/Input';

import useFolders from '../../../hooks/useFolders';
import ModalBase from '../../ModalBase/ModalBase';

const MobileSelectFolderModal = ({ onFolderSelected = folderData => {} }) => {
	const { folders, addNewFolder } = useFolders();

	const [inputValue, setInputValue] = useState();

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
				<div className={styles.folders}>
					{folders.map((element, index) => (
						<button
							key={element.id}
							className={styles.folderButton}
							onClick={() => onFolderSelected(element)}
						>
							{element.name}
						</button>
					))}
				</div>

				<div className={styles.newFolder}>
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
							addNewFolder(inputValue);
							setInputValue('');
						}}
					/>
				</div>
			</div>
		</ModalBase>
	);
};

export default MobileSelectFolderModal;
