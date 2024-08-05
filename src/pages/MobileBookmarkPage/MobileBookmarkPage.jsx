import React, { useState } from 'react';
import styles from './MobileBookmarkPage.module.css';

import useModal from '../../hooks/useModal';

import { ArrowLeft, Edit2, Search, Settings } from 'lucide-react';
import Scroller from '../../components/Scroller/Scroller';

import BookmarkPageViewSettingsModal from '../../components/MobileViewComponents/BookmarkPageViewSettingsModal/BookmarkPageViewSettingsModal';
import MobileEditFolderModal from '../../components/MobileViewComponents/MobileEditFolderModal/MobileEditFolderModal';
import ProfileGridAnimeCardItem from '../../components/ProfileGridAnimeCardItem/ProfileGridAnimeCardItem';
import useFolders from '../../hooks/useFolders';
import Input from '../../ui/Input/Input';

const MobileBookmarkPage = () => {
	console.warn('[MobileBookmarkPage] Re-Render');
	const [activeTab, setActiveTab] = useState(0);

	const [isSearchHeaderActive, setIsSearchHeaderActive] = useState(false);
	const [searchInput, setSearchInput] = useState('');

	const { folders } = useFolders();
	const { showModal } = useModal();

	return (
		<div className={styles.container}>
			{!isSearchHeaderActive ? (
				<div className={styles.header}>
					<div className={styles.headerLeft}>
						<ArrowLeft color='#bfbfbf' size={18} strokeWidth={2} />
						<span onClick={() => {}}>Мои списки</span>
					</div>

					<div className={styles.headerRight}>
						<button
							className={styles.headerButton}
							onClick={() => setIsSearchHeaderActive(true)}
						>
							<Search color='#bfbfbf' size={16} strokeWidth={2} />
						</button>
						<button
							className={styles.headerButton}
							onClick={() => showModal(<MobileEditFolderModal />)}
						>
							<Edit2 color='#bfbfbf' size={16} strokeWidth={2} />
						</button>
						<button
							className={styles.headerButton}
							onClick={() => showModal(<BookmarkPageViewSettingsModal />)}
						>
							<Settings color='#bfbfbf' size={16} strokeWidth={2} />
						</button>
					</div>
				</div>
			) : (
				<div className={styles.searchHeader}>
					<Input
						placeholder='Поиск по названию'
						additionalStyles={{ flexGrow: '1', backgroundColor: '#1c1c1c' }}
						inputValue={searchInput}
						setInputValue={setSearchInput}
					/>
					<button onClick={() => setIsSearchHeaderActive(false)}>Отмена</button>
				</div>
			)}
			<div className={styles.main}>
				<Scroller controls={false}>
					<div className={styles.tabs}>
						<div className={styles.tab} onClick={() => setActiveTab(0)}>
							<span
								className={`${styles.tabText} ${
									activeTab === 0 ? styles.isActive : ''
								}`}
							>
								Все
							</span>
						</div>
						{folders.map(element => (
							<div
								key={element.id}
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
