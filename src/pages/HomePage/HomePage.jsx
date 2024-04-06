import React from 'react'

import styles from './HomePage.module.css'
import AnimeScroller from '../../components/AnimeScroller/AnimeScroller'
import ContinueWatch from '../../components/ContinueWatch/ContinueWatch'
import WatchNow from '../../components/WatchNow/WatchNow'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <AnimeScroller/>
      <ContinueWatch/>
      <WatchNow/>
    </div>
  )
}

export default HomePage