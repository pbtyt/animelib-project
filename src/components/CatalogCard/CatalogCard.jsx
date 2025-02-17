import React, { useEffect, useState } from 'react';
import styles from './CatalogCard.module.css';

import { Link } from 'react-router-dom';

import { animeService } from '../../services/anime.service';
import CatalogCardHover from '../CatalogCardHover/CatalogCardHover';

const CatalogCard = ({
	id,
	index,
	title = 'Anime Title',
	type = 'Anime Type',
	rating = '0,0',
	poster_src = './posters/jujutsu-kaisen.jpg',
}) => {
	console.warn(`[CatalogCard ${title}]: Re-render`);

	const [isHover, setIsHover] = useState(false);
	const [animeData, setAnimeData] = useState({});

	useEffect(() => {
		if (!isHover) return;

		// console.log(typeof(id));
		animeService
			.getAnimeTitleById(id)
			.then(data => setAnimeData(data))
			.catch(er => console.error(er));
	}, [isHover]);

	return (
		<div
			style={{ position: 'relative' }}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link className={styles.catalogCardWrapper} to={`/anime/${id}`}>
				<img className={styles.cardPoster} src={poster_src} alt='poster' />
				<span className={styles.cardTitle}>{title}</span>
				<span className={styles.cardType}>{type}</span>

				<div className={styles.rating}>
					<span style={{ fontSize: '11px', fontWeight: '700' }}>{rating}</span>
				</div>
			</Link>

			{isHover ? (
				<CatalogCardHover index={index} animeData={animeData} id={id} />
			) : (
				<></>
			)}
		</div>
	);
};

export default CatalogCard;
