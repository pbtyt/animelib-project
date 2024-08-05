import React, { useState } from 'react';
import styles from './BookmarkPageViewSettingsModal.module.css';

import { LayoutGrid, List, X } from 'lucide-react';

import DropDownItem from '../../../ui/DropDownItem/DropDownItem';
import DropDownRatioItem from '../../../ui/DropDownRatioItem/DropDownRatioItem';
import HeaderButton from '../../../ui/HeaderButton/HeaderButton';

import useModal from '../../../hooks/useModal';
import ModalBase from '../../ModalBase/ModalBase';

const BookmarkPageViewSettingsModal = () => {
	const { hideModal } = useModal();

	const [view, setView] = useState('list');
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
					<span>Настройки</span>
					<HeaderButton
						icon={<X color='#bfbfbf' width={12} height={12} strokeWidth={3} />}
						text=''
						onClick={() => hideModal()}
					/>
				</div>

				<div className={styles.main}>
					<div className={styles.filterSection}>
						<div className={styles.filterSectionTitleWrapper}>
							<div className={styles.line} style={{ width: '40px' }}></div>
							<span className={styles.filterSectionTitle}>Вид</span>
							<div className={styles.line}></div>
						</div>

						<div className={styles.filterSectionItems}>
							<DropDownItem
								icon={
									<List
										color='#bfbfbf'
										width={16}
										height={16}
										strokeWidth={2}
									/>
								}
								text='Список'
								onClick={() => {
									setView('list');
								}}
								isSelect={view === 'list'}
							/>
							<DropDownItem
								icon={
									<LayoutGrid
										color='#bfbfbf'
										width={16}
										height={16}
										strokeWidth={2}
									/>
								}
								text='Плитка'
								onClick={() => {
									setView('grid');
								}}
								isSelect={view === 'grid'}
							/>
						</div>
					</div>
					{/*  */}
					<div className={styles.filterSection}>
						<div className={styles.filterSectionTitleWrapper}>
							<div className={styles.line} style={{ width: '40px' }}></div>
							<span className={styles.filterSectionTitle}>Сортировка</span>
							<div className={styles.line}></div>
						</div>

						<div className={styles.filterSectionItems}>
							<DropDownRatioItem text={'По названию (A-Z)'} isSelect={true} />
							<DropDownRatioItem text={'По названию (А-Я)'} />
							<DropDownRatioItem text={'Дате добавления'} />
							<DropDownRatioItem text={'Дате обновления серий'} />
							<DropDownRatioItem text={'Дате просмотра'} />
						</div>

						<div className={styles.line}></div>

						<div className={styles.filterSectionItems}>
							<DropDownRatioItem text={'По убыванию'} isSelect={true} />
							<DropDownRatioItem text={'По возрастанию'} />
						</div>
					</div>
				</div>
			</div>
		</ModalBase>
	);
};

export default BookmarkPageViewSettingsModal;
