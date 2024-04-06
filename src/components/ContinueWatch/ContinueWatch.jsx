import React, { useRef, useState } from 'react'
import styles from './ContinueWatch.module.css'

import { MoveRight, MoveLeft } from 'lucide-react'

import ContinueWatchAnimeCard from '../ContinueWatchAnimeCard/ContinueWatchAnimeCard'
import Scroller from '../Scroller/Scroller'

const ContinueWatch = () => {
  const [animeCardQ, setAnimeCardQ] = useState(14);
  return animeCardQ > 0
    ?
    (
      <div className={styles.continueWatchSectionWrapper}>
        <div className={styles.continueWatchSectionHeader}>
          <span className={styles.continueTitle}>Продолжить смотреть</span>
          <div style={{ flexGrow: '1' }}></div>
          <button
            style={{ color: 'rgba(235, 235, 245, .5)' }}
            onClick={() => setAnimeCardQ(0)}
          >
            Очистить
          </button>
        </div>
        <Scroller scrollStep={500} style={{marginTop: '.5rem'}}>
          {
            [... new Array(animeCardQ)].map((_, index) => <ContinueWatchAnimeCard key={index} />)
          }
        </Scroller>
      </div>
    )
    : <></>
}

export default ContinueWatch