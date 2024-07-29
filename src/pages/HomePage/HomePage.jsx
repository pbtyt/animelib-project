import React from 'react';

import AnimeScroller from '../../components/AnimeScroller/AnimeScroller';
import ContinueWatch from '../../components/ContinueWatch/ContinueWatch';
import SearchHeader from '../../components/MobileViewComponents/SearchHeader/SearchHeader/SearchHeader';
import WatchNow from '../../components/WatchNow/WatchNow';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import styles from './HomePage.module.css';

const HomePage = () => {
	console.warn('[HomePage]: Re-Render');

	const isMobile = useCheckMobileScreen();
	return (
		<div className={styles.container}>
			{isMobile && <SearchHeader />}
			<AnimeScroller />
			<ContinueWatch />
			<WatchNow />
		</div>
	);
};

export default HomePage;
