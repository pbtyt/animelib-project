import React from 'react'

import styles from './WatchNowItem.module.css'
import WatchNowCard from '../WacthNowCard/WatchNowCard'

const WatchNowItem = () => {
    return (
        <div className={styles.watchNowItemWrapper}>
            <span
                style={{ color: 'rgba(235, 235, 245, .5)', fontSize: '15px', fontWeight: '600' }}
            >
                Новинки
        </span>
            <WatchNowCard/>
            <WatchNowCard/>
            <WatchNowCard/>
        </div>
    )
}

export default WatchNowItem