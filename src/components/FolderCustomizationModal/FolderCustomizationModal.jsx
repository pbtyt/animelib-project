import React from 'react';
import styles from './FolderCustomizationModal.module.css';

import useModal from '../../hooks/useModal';
import ModalBase from '../ModalBase/ModalBase';

import { Save, Trash, X } from 'lucide-react';
import useFolders from '../../hooks/useFolders';
import Button from '../../ui/Button/Button';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import Input from '../../ui/Input/Input';

const FolderCustomizationModal = ({
	folderName = 'Пользовательская папка',
	folderData = undefined,
}) => {
	const { hideModal } = useModal();

	const { folders, removeFolder } = useFolders();

	return (
		<ModalBase
			alignPos='center'
			modalWindowWidth={'400px'}
			offsetSettings={{ bottom: '10rem' }}
		>
			<div className={styles.titleWrapper}>
				<span className={styles.title}>Редактирование папки</span>
				<HeaderButton
					icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
					text=''
					onClick={() => hideModal()}
				/>
			</div>
			<div className={styles.modalMain}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
					<span className={styles.subTitle}>Название папки</span>
					<Input icon={<></>} placeholder='' inputValue={folderName} />
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						borderBottom: '1px solid #545458a6',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: '1',
						}}
					>
						<span>Публичная</span>
						<span className={styles.subTitle}>
							Будет видна всем пользователям
						</span>
					</div>
					<FilterCheckbox />
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						borderBottom: '1px solid #545458a6',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: '1',
						}}
					>
						<span>Уведомления</span>
						<span className={styles.subTitle}>
							Присылать уведомления о новых главах
						</span>
					</div>
					<FilterCheckbox />
				</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						borderBottom: '1px solid #545458a6',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							flexGrow: '1',
						}}
					>
						<span>Цвет</span>
					</div>
					<FilterCheckbox />
				</div>

				<div className={styles.buttonsWrapper}>
					<Button
						styleIndex={1}
						additionalStyles={{
							backgroundColor: 'rgba(75,175,80,.05)',
							color: 'rgba(75,175,80,1)',
							flexGrow: '1',
						}}
					>
						<Save
							color='rgba(75,175,80,1)'
							width={16}
							height={16}
							strokeWidth={2}
						/>
						<span>Сохранить</span>
					</Button>
					<Button
						styleIndex={1}
						additionalStyles={{
							backgroundColor: 'rgba(222, 112, 114, .1)',
							color: '#de7072',
							padding: '10px',
						}}
						onClick={() => {
							removeFolder(folderData.id);
							hideModal();
						}}
					>
						<Trash size={16} color='#de7072' strokeWidth={2} />
					</Button>
				</div>
			</div>
		</ModalBase>
	);
};

export default FolderCustomizationModal;
