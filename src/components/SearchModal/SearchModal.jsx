import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

import styles from './SearchModal.module.css'
import SearchModalItem from '../SearchModalItem/SearchModalItem'

import { animeService } from '../../services/anime.service'

const SearchModal = () => {
    const [animeTitles, setAnimeTitles] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(()=>{
        animeService.searchTitle(searchQuery)
                    .then(data=>setAnimeTitles( data.map(el=>el[0]) ))
    }, [searchQuery])

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContent}>
                <div className={styles.inputWrapper}>
                    <Search color='rgba(235, 235, 245, .5)' strokeWidth={2} size={17} />
                    <input type="text" className={styles.input} placeholder='Поиск тайтлов'
                        // поменять на real-time поиск...
                        onKeyDown={event => {
                            if(event.key === "Enter")
                                setSearchQuery(event.target.value)
                        }}
                    />
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
                    
                    {
                        animeTitles.length === 0 ? 
                        <p className={styles.empty}>
                        <span>Расширенный поиск тайтлов находиться в </span>
                        <Link to="/catalog">каталог</Link>
                        </p>
                        :
                        animeTitles.map(data => <SearchModalItem data={data} key={data.id}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchModal