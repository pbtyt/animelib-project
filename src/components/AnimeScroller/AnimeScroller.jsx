import React from 'react'

import styles from './AnimeScroller.module.css'
import AnimeCard from '../AnimeCard/AnimeCard'
import Scroller from '../Scroller/Scroller'

const AnimeScroller = () => {
    return (
        <div className={styles.animeScrollerWrapper}>
            <Scroller>
                {
                    [...new Array(13)].map((_, index)=><AnimeCard key={index}/>)
                }
            </Scroller>
        </div>
    )
}

export default AnimeScroller