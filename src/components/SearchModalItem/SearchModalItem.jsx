import React from 'react'
import styles from './SearchModalItem.module.css'

const SearchModalItem = ({ data = {} }) => {
    return (
        <div className={styles.smItem}>
            <img src={data.cover.thumbnail} alt="poster" className={styles.smPoster} />

            <div className={styles.smInfo}>
                <span className={styles.status}>
                    {data.status}
                </span>
                <span className={styles.title}>
                    {data.titles.ru}
                </span>
                <div className={styles.tr}>
                    <span className={styles.type}>
                        {data.type}
                    </span>
                    <span className={styles.releaseDate}>
                        {data.release_date}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchModalItem