import React from 'react';

import AnimeCard from '../AnimeCard/AnimeCard';
import Scroller from '../Scroller/Scroller';
import styles from './AnimeScroller.module.css';

const AnimeScroller = () => {
	return (
		<div className={styles.animeScrollerWrapper}>
			<Scroller scrollStep={560}>
				{[...new Array(13)].map((_, index) => (
					<AnimeCard key={index} />
				))}
			</Scroller>
		</div>
	);
};

export default AnimeScroller;
