import React from 'react'
import styles from './CatalogCard.module.css'

const CatalogCard = () => {
  return (
    <div className={styles.catalogCardWrapper}>
        <img className={styles.cardPoster} src="./posters/jujutsu-kaisen.jpg" alt="poster" />
        <span className={styles.cardTitle}>
            Магическая битва
        </span>
        <span className={styles.cardType}>
            TV
        </span>

        <div className={styles.rating}>
          <span
            style={{fontSize: '11px', fontWeight: '700'}}
          >9,3</span>
        </div>
    </div>
  )
}

export default CatalogCard