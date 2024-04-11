import React, { useState } from 'react'
import styles from './CatalogCard.module.css'
import CatalogCardHover from '../CatalogCardHover/CatalogCardHover'

const CatalogCard = ({ index, title = "Anime Title", type = "Anime Type", rating = "0,0", poster_src = "./posters/jujutsu-kaisen.jpg" }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className={styles.catalogCardWrapper}
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
    >
      <img className={styles.cardPoster} src={poster_src} alt="poster" />
      <span className={styles.cardTitle}>
        {title}
      </span>
      <span className={styles.cardType}>
        {type}
      </span>

      <div className={styles.rating}>
        <span
          style={{ fontSize: '11px', fontWeight: '700' }}
        >{rating}</span>
      </div>
      
      {
        (isHover)
          ? <CatalogCardHover index={index}/>
          : <></>
      }
    </div>
  )
}

export default CatalogCard