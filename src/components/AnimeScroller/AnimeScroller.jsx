import React, { useState, useRef } from 'react'

import { MoveRight, MoveLeft } from 'lucide-react'

import styles from './AnimeScroller.module.css'
import AnimeCard from '../AnimeCard/AnimeCard'

const AnimeScroller = () => {
    const [isHoverR, setIsHoverR] = useState(false);
    const [isHoverL, setIsHoverL] = useState(false);
    const scrollerRef = useRef(null);
    const scrollStep = 80;
    return (
        <div className={styles.scrollerWrapper}>
            <div className={styles.scroller} ref={scrollerRef}>
                {
                    [...new Array(13)].map((_, index)=><AnimeCard key={index}/>)
                }
            </div>

            <div className={styles.arrowWrapper}
                style={{right: '0', justifyContent: 'end'}}
                onMouseEnter={() => setIsHoverR(true)}
                onMouseLeave={() => setIsHoverR(false)}
            >
                <button className={`${styles.rightArrow} ${isHoverR ? styles.hoveredR : ''}`}
                    onClick={()=>{
                        if (scrollerRef.current.scrollLeft === 300) setIsHoverR(false)
                        console.log(scrollerRef.current.scrollLeft);
                        scrollerRef.current.scrollLeft += scrollStep;
                    }}
                >
                    <MoveRight color='#bfbfbf' />
                </button>  
            </div>

            <div className={styles.arrowWrapper}
                style={{left: '0', justifyContent: 'start'}}
                onMouseEnter={() => setIsHoverL(true)}
                onMouseLeave={() => setIsHoverL(false)}
            >
                <button className={`${styles.leftArrow} ${isHoverL ? styles.hoveredL : ''}`}
                    onClick={()=>{
                        if (scrollerRef.current.scrollLeft === 0) setIsHoverL(false)
                        console.log(scrollerRef.current.scrollLeft);
                        scrollerRef.current.scrollLeft -= scrollStep;
                    }}
                >
                    <MoveLeft color='#bfbfbf' />
                </button>  
            </div>
        </div>
    )
}

export default AnimeScroller