import React, { useState } from 'react'
import styles from './FilterCheckbox.module.css'

import { Check } from 'lucide-react'

const FilterCheckbox = ({ checkboxText = "" }) => {

    const [isCheck, setIsCheck] = useState(false);

    return (
        <button className={styles.checkboxWrapper} onClick={()=>setIsCheck(prev => !prev)}>
            {
                !isCheck ? 
                <div className={styles.checkbox}>
                </div>
                :
                <div className={styles.checkbox} style={{backgroundColor: '#7e57c2', border: 'none'}}>
                    <Check size={10} strokeWidth={4}/>
                </div>
            }

            <span className={styles.checkboxText}>{checkboxText}</span>
        </button>
    )
}

export default FilterCheckbox