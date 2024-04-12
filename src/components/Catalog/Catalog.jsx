import React, { useState, useEffect } from 'react'
import styles from './Catalog.module.css'

import CatalogCard from '../CatalogCard/CatalogCard'

import { animeService } from '../../services/anime.service'
import data from '../../data/new.json'

const Catalog = () => {
  const [animeTitles, setAnimeTitles] = useState([])
  useEffect(() => {
    animeService.getAnimeTitles().then((data) => {
      setAnimeTitles(data)
    })
  }, [])

  return (
    <div className={styles.catalogWrapper}>
      {
        animeTitles.map(
          (anime_data, index) => <CatalogCard
            title={anime_data.titles.ru}
            type={anime_data.type}
            rating={anime_data.rating}
            poster_src={anime_data.cover.default}
            index={index + 1}
            key={anime_data.id}
          />
        )
      }
    </div>
  )
}

export default Catalog