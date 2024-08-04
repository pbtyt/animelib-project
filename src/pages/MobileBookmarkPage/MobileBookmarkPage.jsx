import React, { useState } from 'react';
import styles from './MobileBookmarkPage.module.css';

import { ArrowLeft, Edit2, Search, Settings } from 'lucide-react';
import Scroller from '../../components/Scroller/Scroller';

import ProfileGridAnimeCardItem from '../../components/ProfileGridAnimeCardItem/ProfileGridAnimeCardItem';
import useLocalStorage from '../../hooks/useLocalStorage';

const MobileBookmarkPage = () => {
	console.warn('[MobileBookmarkPage] Re-Render');
	const [activeTab, setActiveTab] = useState(0);

	//NOTE: Only For TEST
	const { setValue, storedValue } = useLocalStorage('folder', [
		{ id: 1, name: 'Читаю', color: '#ff9b40', count: 0 },
		{ id: 2, name: 'В планах', color: '#2196f3', count: 0 },
		{ id: 3, name: 'Брошено', color: '#f3382a', count: 0 },
		{ id: 4, name: 'Прочитано', color: '#3cce7b', count: 0 },
		{ id: 5, name: 'Любимые', color: '#ff6666', count: 0 },
	]);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<ArrowLeft color='#bfbfbf' size={18} strokeWidth={2} />
					<span>Мои списки</span>
				</div>

				<div className={styles.headerRight}>
					<button className={styles.headerButton}>
						<Search color='#bfbfbf' size={16} strokeWidth={2} />
					</button>
					<button className={styles.headerButton}>
						<Edit2 color='#bfbfbf' size={16} strokeWidth={2} />
					</button>
					<button className={styles.headerButton}>
						<Settings color='#bfbfbf' size={16} strokeWidth={2} />
					</button>
				</div>
			</div>

			<div className={styles.main}>
				<Scroller>
					<div className={styles.tabs}>
						<div className={styles.tab} onClick={() => setActiveTab(1)}>
							<span
								className={`${styles.tabText} ${
									activeTab === 0 ? styles.isActive : ''
								}`}
							>
								Все
							</span>
						</div>
						{storedValue.map(element => (
							<div
								className={styles.tab}
								onClick={() => setActiveTab(element.id)}
							>
								<span
									className={`${styles.tabText} ${
										activeTab === element.id ? styles.isActive : ''
									}`}
								>
									{element.name}
								</span>
							</div>
						))}
					</div>
				</Scroller>

				<div className={styles.content}>
					<ProfileGridAnimeCardItem
						imgSrc='../placeholders/mobilepage/poster_placeholder.jpg'
						title='Госпожа Кагуя: в любви как на войне 2'
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileBookmarkPage;
