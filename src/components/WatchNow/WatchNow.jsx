import React from 'react'

import styles from './WatchNow.module.css'
import WatchNowItem from '../WacthNowItem/WatchNowItem'

const WatchNow = () => {
  return (
    <div className={styles.watchNowWrapper}>
      <span className={styles.watchNowTitle}>Сейчас смотрят</span>

      <div className={styles.watchNowContent}>
        <WatchNowItem/>
        <WatchNowItem/>
        <WatchNowItem/>
      </div>
    </div>
  )
}

export default WatchNow