import React from 'react';

import AnimeScroller from '../../components/AnimeScroller/AnimeScroller';
import ContinueWatch from '../../components/ContinueWatch/ContinueWatch';
import WatchNow from '../../components/WatchNow/WatchNow';
import styles from './HomePage.module.css';

const HomePage = () => {
	return (
		<div className={styles.container}>
			<AnimeScroller />
			<ContinueWatch />
			<WatchNow />
		</div>
	);
};

export default HomePage;
