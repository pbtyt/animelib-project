import React, { useState } from 'react';
import styles from './MobileEditFolderModal.module.css';

import HeaderButton from '../../../ui/HeaderButton/HeaderButton';
import Input from '../../../ui/Input/Input';

import useModal from '../../../hooks/useModal';
import ModalBase from '../../ModalBase/ModalBase';

import { Edit2, Menu, Plus, X } from 'lucide-react';
import useFolders from '../../../hooks/useFolders';
import FolderCustomizationModal from '../../FolderCustomizationModal/FolderCustomizationModal';

const MobileEditFolderModal = () => {
	const { folders, addNewFolder } = useFolders();

	const [inputValue, setInputValue] = useState('');

	const { hideModal, showModal } = useModal();

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
				<div className={styles.header}>
					<span>Редактирование списков</span>
					<HeaderButton
						icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
						text=''
						onClick={() => hideModal()}
					/>
				</div>
				<div className={styles.folders}>
					{folders.map((element, index) => (
						<div className={styles.folderItem} key={element.id}>
							<span>{element.name}</span>
							{element.userCreated && (
								<Edit2
									color='#bfbfbf'
									size={16}
									strokeWidth={2}
									onClick={() =>
										showModal(
											<FolderCustomizationModal
												folderName={element.name}
												folderData={element}
											/>
										)
									}
								/>
							)}
							<Menu color='#bfbfbf' width={16} height={16} strokeWidth={2} />
						</div>
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

export default MobileEditFolderModal;
