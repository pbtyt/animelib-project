import React, { useRef } from 'react';
import styles from './ProfileCardEditModal.module.css';

import useModal from '../../hooks/useModal';
import ModalBase from '../ModalBase/ModalBase';

import DropDown from '../../ui/DropDown/DropDown';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import Input from '../../ui/Input/Input';

import { ChevronDown, Save, Star, Trash, X } from 'lucide-react';
import Button from '../../ui/Button/Button';

const ProfileCardEditModal = () => {
	const contentRef = useRef(null);
	const { hideModal } = useModal();
	return (
		<ModalBase contentRef={contentRef}>
			<div className={styles.modalContent} ref={contentRef}>
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
					<span style={{ fontSize: '15px', fontWeight: '500' }}>
						Отсутствует
					</span>
					<div style={{ flexGrow: '1' }}></div>

					<Button styleIndex={0}>
						<Star size={16} color='#bfbfbf' strokeWidth={1} />
						<span>Оценить</span>
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
					<span className={styles.subTitle}>Комментарий</span>
					<Input icon={<></>} placeholder='' />
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
						<DropDownItem text='Читаю' isSelect={true} />
						<DropDownItem text='В планах' />
						<DropDownItem text='Брошено' />
						<DropDownItem text='Прочитано' />
						<DropDownItem text='Любимые' />
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
			</div>
		</ModalBase>
	);
};

export default ProfileCardEditModal;
