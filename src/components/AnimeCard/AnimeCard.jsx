import React from 'react'

import styles from './AnimeCard.module.css'

const AnimeCard = () => {
  return (
    <div className={styles.animeCardWrapper}>
        <div className={styles.animeCardPosterWrapper}>
            <img src="./posters/jujutsu-kaisen.jpg" alt="poster" className={styles.animeCardPoster} width={135} height={189}/>
            <span className={styles.episodeCount}>Эпизод 22</span>
        </div>
        <a href="#">
            <span className={styles.animeTitle}>Магическая битва</span>
        </a>
        <span className={styles.animeType}>TV</span>
    </div>
  )
}

export default AnimeCard