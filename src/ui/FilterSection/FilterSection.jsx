import React from 'react'
import styles from './FilterSection.module.css'

import { ChevronRight } from 'lucide-react'

const FilterSection = ({ sectionTitle }) => {
    return (
        <button className={styles.filterSection}>
            <span className={styles.filterSectionTitle}>{sectionTitle}</span>
            <div style={{ flexGrow: '1' }}></div>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <span className={styles.filterSectionSelected}>Любые</span>
                <ChevronRight color='rgba(235, 235, 245, .5)' strokeWidth={2} size={16} />
            </div>
        </button>
    )
}

export default FilterSection