import React, { useState } from 'react';
import styles from './MobileEditFolderModal.module.css';

import { Plus } from 'lucide-react';
import HeaderButton from '../../../ui/HeaderButton/HeaderButton';
import Input from '../../../ui/Input/Input';

import useLocalStorage from '../../../hooks/useLocalStorage';

import ModalBase from '../../ModalBase/ModalBase';

const MobileEditFolderModal = () => {
	//NOTE: Only For TEST
	const { setValue, storedValue } = useLocalStorage('folder', [
		{ id: 1, name: 'Читаю', color: '#ff9b40', count: 0 },
		{ id: 2, name: 'В планах', color: '#2196f3', count: 0 },
		{ id: 3, name: 'Брошено', color: '#f3382a', count: 0 },
		{ id: 4, name: 'Прочитано', color: '#3cce7b', count: 0 },
		{ id: 5, name: 'Любимые', color: '#ff6666', count: 0 },
	]);
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
					{storedValue.map((element, index) => (
						<button className={styles.folderButton}>{element.name}</button>
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
					/>
				</div>
			</div>
		</ModalBase>
	);
};

export default MobileEditFolderModal;
