import React, { useState } from 'react'
import styles from './CatalogCard.module.css'

import { Link } from 'react-router-dom'

import CatalogCardHover from '../CatalogCardHover/CatalogCardHover'

const CatalogCard = ({ index, title = "Anime Title", type = "Anime Type", rating = "0,0", poster_src = "./posters/jujutsu-kaisen.jpg" }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link className={styles.catalogCardWrapper}
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
      to={"/anime"}
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
    </Link>
  )
}

export default CatalogCard