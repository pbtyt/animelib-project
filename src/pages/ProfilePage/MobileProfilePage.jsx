import React from 'react';
import styles from './MobileProfilePage.module.css';

import { Link } from 'react-router-dom';

import {
	ArrowLeft,
	Bookmark,
	ChevronRight,
	Ellipsis,
	Settings,
} from 'lucide-react';

const MobileProfilePage = () => {
	console.warn('[MobileProfilePage] Re-Render');
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<ArrowLeft color='#bfbfbf' size={18} strokeWidth={2} />
					<span>Профиль пользователя</span>
				</div>

				<div className={styles.headerRight}>
					<button className={styles.settingsButton}>
						<Settings color='#bfbfbf' size={16} strokeWidth={2} />
					</button>
					<Ellipsis color='#bfbfbf' size={18} strokeWidth={2} />
				</div>
			</div>

			<div className={styles.main}>
				<img
					src='./placeholders/mobileprofilepage/background_placeholder.jpeg'
					alt='background'
					className={styles.backgroundImage}
				/>
				<div className={styles.userCard}>
					<img
						src='./placeholders/mobilepage/publisher_placeholder.png'
						alt='user avatar'
						className={styles.userIcon}
					/>

					<div className={styles.userInfo}>
						<strong className={styles.userName}>blad3</strong>
						<span className={styles.userStatus}>
							Последний вход 3 часа назад
						</span>
						<span className={styles.userLevel}>Уровень 999</span>
					</div>
				</div>
				<div className={styles.navigateButtons}>
					{...Array(1)
						.fill(0)
						.map((_, index) => (
							<Link
								key={index}
								className={styles.navigateButton}
								to='./bookmarks'
							>
								<Bookmark fill='#bfbfbf' size={22} strokeWidth={0} />
								<span>Списки тайтлов</span>
								<div style={{ flexGrow: '1' }}></div>
								<ChevronRight color='#bfbfbf' size={20} strokeWidth={2} />
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};

export default MobileProfilePage;
