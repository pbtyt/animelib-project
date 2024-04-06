import React, { useState } from 'react'
import styles from './DropDown.module.css'

import { ChevronDown } from 'lucide-react'

const DropDown = ({children, dropDownTitle, button}) => {
    const [isOpened, setIsOpened] = useState(false);
    
    return (
        <div className={styles.dropdown}
            onClick={()=>setIsOpened(prev => !prev)}
        >
            {
                !button 
                    ?
                    <button className={styles.defaultButton}>
                        <span>{dropDownTitle}</span>
                        <ChevronDown width={16} height={16} strokeWidth={1.8}/>
                    </button>
                    : button
            } 

            <ul className={`${styles.choose} ${isOpened ? styles.opened : ''}`}>
                {children}
            </ul>
        </div>
    )
}

export default DropDown