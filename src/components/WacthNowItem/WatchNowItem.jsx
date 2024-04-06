import React from 'react'

import styles from './WatchNowItem.module.css'
import WatchNowCard from '../WacthNowCard/WatchNowCard'
import { Subtitles } from 'lucide-react'

const WatchNowItem = ({ subTitle = "Новинки" }) => {
    return (
        <div className={styles.watchNowItemWrapper}>
            <span
                style={{ color: 'rgba(235, 235, 245, .5)', fontSize: '15px', fontWeight: '600' }}
            >
                {subTitle}
        </span>
            <WatchNowCard/>
            <WatchNowCard/>
            <WatchNowCard/>
        </div>
    )
}

export default WatchNowItem