import React from 'react'
import styles from './WatchNowCard.module.css'

const WatchNowCard = () => {
    return (
        <div className={styles.wnCardWrapper}>
            <img src="./posters/jujutsu-kaisen.jpg" alt="poster" className={styles.wnCardPoster} />
            <div className={styles.wnCardInfo}>
                <span className={styles.wnCardTitle}>
                    О моём перерождении в слизь 3
                </span>
                <span className={styles.wnCardType}>
                    TV
                </span>
            </div>
        </div>
    )
}

export default WatchNowCard