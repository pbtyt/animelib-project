import React from 'react';
import styles from './MenuModal.module.css';

import { Link } from 'react-router-dom';

import {
	Bell,
	Bookmark,
	ChevronDown,
	Palette,
	Search,
	Settings,
} from 'lucide-react';
import ModalBase from '../../ModalBase/ModalBase';
import MenuModalButton from './MenuModalButton';

const MenuModal = () => {
	return (
		<ModalBase
			modalWindowWidth='calc(100% - 70px)'
			attachmentPos='right'
			modalWindowHeight='100%'
			additionalStyles={{
				margin: '0',
				borderRadius: '0',
				backgroundColor: '#0a0a0a',
			}}
		>
			<div className={styles.modalScroll}>
				<div className={styles.content}>
					<div className={styles.header}>
						<button className={styles.headerButton}>
							<Palette size={20} strokeWidth={2} color='#ebebf580' />
							<span>Тема</span>
						</button>
						<button className={styles.headerButton}>
							<Settings size={20} strokeWidth={2} color='#ebebf580' />
							<span>Настройки</span>
						</button>
						<button className={styles.headerButton}>
							<Search size={20} strokeWidth={2} color='#ebebf580' />
							<span>Поиск</span>
						</button>
					</div>

					<div className={styles.main}>
						<div className={styles.profileItems}>
							<div className={styles.profile}>
								<Link className={styles.profileLink} to='/animelib-project/'>
									<img
										src='../placeholders/mobilepage/publisher_placeholder.png'
										alt='user_poster'
										width={50}
										height={50}
									/>

									<strong>blad3</strong>
								</Link>

								<div className={styles.profileButtons}>
									<Bookmark fill='#ebebf580' size={22} strokeWidth={0} />
									<Bell fill='#ebebf580' size={22} strokeWidth={0} />
								</div>
							</div>

							<MenuModalButton
								icon={
									<ChevronDown color='#ebebf580' strokeWidth={2} size={20} />
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</ModalBase>
	);
};

export default MenuModal;
