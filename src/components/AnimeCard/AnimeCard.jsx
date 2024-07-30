import React from 'react';
import styles from './AnimeCard.module.css';

import { Link } from 'react-router-dom';

const AnimeCard = () => {
	return (
		<div className={styles.animeCardWrapper}>
			<Link
				className={styles.animeCardPosterWrapper}
				to={'/animelib-project/anime/156'}
			>
				<img
					src='./posters/jujutsu-kaisen.jpg'
					alt='poster'
					className={styles.animeCardPoster}
					// width={135}
					// height={189}
				/>
				<span className={styles.episodeCount}>Эпизод 22</span>
			</Link>
			<a href='#'>
				<span className={styles.animeTitle}>Магическая битва</span>
			</a>
			<span className={styles.animeType}>TV</span>
		</div>
	);
};

export default AnimeCard;
