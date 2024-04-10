import React, { useState } from 'react'
import styles from './Catalog.module.css'

import CatalogCard from '../CatalogCard/CatalogCard'

import data from '../../data/new.json'

const Catalog = () => {
  return (
    <div className={styles.catalogWrapper}>
      {
        data.slice(0, 30).map(
          anime_data => <CatalogCard 
                          title={anime_data.titles.ru} 
                          type={anime_data.type} 
                          rating={anime_data.rating}
                          poster_src={anime_data.cover.default}
                          key={anime_data.id}
                        />
        )
      }     
    </div>
  )
}

export default Catalog