import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

import styles from './SearchModal.module.css'
import SearchModalItem from '../SearchModalItem/SearchModalItem'

const SearchModal = () => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContent}>
                <div className={styles.inputWrapper}>
                    <Search color='rgba(235, 235, 245, .5)' strokeWidth={2} size={17} />
                    <input type="text" className={styles.input} placeholder='Поиск тайтлов' />
                </div>

                <div className={styles.tabsWrapper}>
                    <div className={styles.tab}>
                        <span className={`${styles.tabText} ${styles.isActive}`}>
                            Тайтлы
                        </span>
                    </div>
                    <div className={styles.tab}>
                        <span className={styles.tabText}>
                            Тайтлы
                        </span>
                    </div>
                    <div className={styles.tab}>
                        <span className={styles.tabText}>
                            Тайтлы
                        </span>
                    </div>
                    <div className={styles.tab}>
                        <span className={styles.tabText}>
                            Тайтлы
                        </span>
                    </div>
                    <div className={styles.tab}>
                        <span className={styles.tabText}>
                            Тайтлы
                        </span>
                    </div>
                </div>
                <div className={styles.searchResultWrapper}>
                    {/* <p className={styles.empty}>
                        <span>Расширенный поиск тайтлов находиться в </span>
                        <Link to="/catalog">каталог</Link>
                    </p> */}
                    <SearchModalItem/>
                    <SearchModalItem/>
                    <SearchModalItem/>
                    <SearchModalItem/>
                    <SearchModalItem/>
                    <SearchModalItem/>
                </div>
            </div>
        </div>
    )
}

export default SearchModal