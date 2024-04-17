import React from 'react'
import styles from './CatalogCardHover.module.css'

import { Link } from 'react-router-dom'

import { Plus, ChevronDown } from 'lucide-react'

const CatalogCardHover = ({ index, animeData, id }) => {
    return (
        <div className={`${styles.ccHoverWrapper} ${index % 5 === 0 ? styles.L : styles.R}`}>
            <div className={styles.ccHoverHeader}>
                <span className={styles.ccHoverTitle}>{animeData?.titles?.ru}</span>
                <span className={styles.ccHoverEngTitle}>{animeData?.titles?.title || animeData?.titles?.eng}</span>
            </div>
            <div className={styles.ccHoverInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.infoItemH}>Статус</span>
                    <span className={styles.infoItemC}>{animeData?.status}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoItemH}>Выпуск</span>
                    <span className={styles.infoItemC}>{animeData?.release_date}</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoItemH}>Эпизоды</span>
                    <span className={styles.infoItemC}>
                        {animeData?.episodes_count?.uploaded} из {animeData?.episodes_count?.total} [{animeData?.time?.formated}]
                    </span>
                </div>
            </div>
            <div className={styles.ccDescWrapper}>
                <div className={styles.ccHoverDesc}>
                    <span>
                        {animeData?.description}
                    </span>
                </div>
                <Link to={`/anime?id=${id}`} className={styles.ccDescMore}>Подробнее...</Link>
            </div>
            <div className={styles.ccButtons}>
                <button className={styles.ccAddToPlans}>
                    <Plus size={14} color='#bfbfbf' />
                    <span className={styles.ccBtnText}>Добавить в планы</span>
                </button>

                <button className={styles.ccChevron}>
                    <ChevronDown color='#bfbfbf' strokeWidth={2} size={18} />
                </button>
            </div>
        </div>
    )
}

export default CatalogCardHover