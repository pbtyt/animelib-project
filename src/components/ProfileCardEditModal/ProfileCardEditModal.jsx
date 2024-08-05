import React, { useState } from 'react';
import styles from './ProfileCardEditModal.module.css';

import useModal from '../../hooks/useModal';
import ModalBase from '../ModalBase/ModalBase';

import DropDown from '../../ui/DropDown/DropDown';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';

import Button from '../../ui/Button/Button';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import Input from '../../ui/Input/Input';

import { ChevronDown, Minus, Plus, Save, Star, Trash, X } from 'lucide-react';
import useFolders from '../../hooks/useFolders';
import GradeModal from '../GradeModal/GradeModal';

const ProfileCardEditModal = () => {
	const { hideModal, showModal } = useModal();

	const [num, setNum] = useState(0);

	const { folders } = useFolders();

	return (
		<ModalBase
			modalWindowWidth={'400px'}
			alignPos='center'
			additionalStyles={{
				padding: '18px',
				display: 'flex',
				flexDirection: 'column',
				gap: '.75rem',
			}}
			offsetSettings={{ bottom: '10rem' }}
		>
			<div className={styles.titleWrapper}>
				<span className={styles.title}>Редактирование тайтла</span>
				<HeaderButton
					icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
					text=''
					onClick={() => hideModal()}
				/>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
				<span className={styles.subTitle}>Моя оценка:</span>
				<span style={{ fontSize: '15px', fontWeight: '500' }}>Отсутствует</span>
				<div style={{ flexGrow: '1' }}></div>

				<Button styleIndex={0} onClick={() => showModal(<GradeModal />)}>
					<Star size={16} color='#bfbfbf' strokeWidth={1} />
					<span>Оценить</span>
				</Button>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
				<span className={styles.subTitle}>Комментарий</span>
				<Input icon={<></>} placeholder='' />
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
				<span className={styles.subTitle}>Количество прочтений</span>
				<div style={{ display: 'flex' }}>
					<Input
						icon={<></>}
						minValue='0'
						inputmode='numeric'
						placeholder='Введите число'
						type='number'
						isReadonly={true}
						oInputValue={num}
						additionalStyles={{
							flexGrow: '1',
							borderRight: 'none',
							borderTopRightRadius: '0px',
							borderBottomRightRadius: '0px',
						}}
					/>
					<Button
						styleIndex={0}
						additionalStyles={{
							flexGrow: '.05',
							borderTopRightRadius: '0px',
							borderBottomRightRadius: '0px',
							borderTopLeftRadius: '0px',
							borderBottomLeftRadius: '0px',
							borderRight: 'none',
						}}
						onClick={() => setNum(prev => prev + 1)}
					>
						<Plus color='#bfbfbf' width={12} height={12} strokeWidth={3} />
					</Button>
					<Button
						styleIndex={0}
						additionalStyles={{
							flexGrow: '.05',
							borderTopLeftRadius: '0px',
							borderBottomLeftRadius: '0px',
						}}
						onClick={() => setNum(prev => Math.max(0, prev - 1))}
					>
						<Minus color='#bfbfbf' width={12} height={12} strokeWidth={3} />
					</Button>
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
				<span className={styles.subTitle}>Список</span>
				<DropDown
					minMenuWidth='100%'
					useTemplate={true}
					template={
						<Button styleIndex={0} additionalStyles={{ width: '100%' }}>
							<span style={{ flexGrow: '1', textAlign: 'start' }}>Читаю</span>
							<ChevronDown width={16} height={16} strokeWidth={1.8} />
						</Button>
					}
				>
					{folders.map(folder => (
						<DropDownItem
							key={folder.id}
							text={folder.name}
							isSelect={folder.id === 1}
						/>
					))}
				</DropDown>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row-reverse',
					gap: '1rem',
				}}
			>
				<Button styleIndex={1} onClick={() => hideModal()}>
					<Save size={16} color='white' strokeWidth={2} />
					<span>Сохранить</span>
				</Button>
				<Button
					styleIndex={1}
					additionalStyles={{
						backgroundColor: 'transparent',
						color: '#de7072',
					}}
					onClick={() => hideModal()}
				>
					<Trash size={16} color='#de7072' strokeWidth={2} />
					Удалить
				</Button>
			</div>
		</ModalBase>
	);
};

export default ProfileCardEditModal;
