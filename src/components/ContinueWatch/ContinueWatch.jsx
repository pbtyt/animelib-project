import React from 'react'
import styles from './ContinueWatch.module.css'
import ContinueWatchAnimeCard from '../ContinueWatchAnimeCard/ContinueWatchAnimeCard'

const ContinueWatch = () => {
  return (
    <div className={styles.continueWatchSectionWrapper}>
        <span className={styles.continueTitle}>Продолжить смотреть</span>
        <div className={styles.cwCardsWrapper}>
            <ContinueWatchAnimeCard/>
        </div>
    </div>
  )
}

export default ContinueWatch