import React from 'react'

import styles from './HomePage.module.css'
import AnimeScroller from '../../components/AnimeScroller/AnimeScroller'
import ContinueWatch from '../../components/ContinueWatch/ContinueWatch'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <AnimeScroller/>
      <ContinueWatch/>
    </div>
  )
}

export default HomePage