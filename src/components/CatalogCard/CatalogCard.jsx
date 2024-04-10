import React from 'react'
import styles from './CatalogCard.module.css'

const CatalogCard = ({ title = "Anime Title", type = "Anime Type", rating = "0,0", poster_src = "./posters/jujutsu-kaisen.jpg" }) => {
  return (
    <div className={styles.catalogCardWrapper}>
        <img className={styles.cardPoster} src={poster_src} alt="poster" />
        <span className={styles.cardTitle}>
            {title}
        </span>
        <span className={styles.cardType}>
            {type}
        </span>

        <div className={styles.rating}>
          <span
            style={{fontSize: '11px', fontWeight: '700'}}
          >{rating}</span>
        </div>
    </div>
  )
}

export default CatalogCard