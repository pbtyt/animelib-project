import React from 'react'

import styles from './HomePage.module.css'
import AnimeScroller from '../../components/AnimeScroller/AnimeScroller'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <AnimeScroller/>
    </div>
  )
}

export default HomePage