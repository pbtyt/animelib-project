import React, { useState } from 'react'

import styles from './ContinueWatchAnimeCard.module.css'

import { X } from 'lucide-react'
import Slider from '../../ui/Slider/Slider'

const ContinueWatchAnimeCard = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        // cw -> continue watch
        <div className={styles.cwCardWrapper}>
            <img src="./posters/jujutsu-kaisen.jpg" alt="cw poster" className={styles.cwAnimePoster} />
            <div className={styles.cwAnimeInfo}>
                <span className={styles.cwAnimeTitle}>
                    Магическая Битва
                </span>

                <span className={styles.continueInfo}>
                    Эпизод 22 — 13:56 из 25:54
                </span>
                <div style={{ flexGrow: '1' }}></div>
                <Slider defaultValue={54} />
            </div>

            <div className={styles.closeButtonWrapper}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <button className={`${styles.close} ${isHover ? styles.hovered : ''}`}>
                    <X width={16} height={16} color='#DE7072' />
                </button>
            </div>
        </div>
    )
}

export default ContinueWatchAnimeCard