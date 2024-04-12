import React from 'react'
import styles from './SearchModalItem.module.css'

const SearchModalItem = () => {
  return (
    <div className={styles.smItem}>
        <img src="./posters/jujutsu-kaisen.jpg" alt="poster" className={styles.smPoster} />

        <div className={styles.smInfo}>
            <span className={styles.status}>
                Завершён
            </span>
            <span className={styles.title}>
                Магическая битва
            </span>
            <div className={styles.tr}>
                <span className={styles.type}>
                    TV сериалы
                </span>
                <span className={styles.releaseDate}>
                    03 октября 2020г.
                </span>
            </div>
        </div>
    </div>
  )
}

export default SearchModalItem