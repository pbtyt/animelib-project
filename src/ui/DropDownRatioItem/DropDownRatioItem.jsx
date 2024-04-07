import React from 'react'
import styles from './DropDownRatioItem.module.css'

import { Circle, CircleDot } from 'lucide-react'

const DropDownRatioItem = ({ text = "default", isSelect = false }) => {
    return (
        <li
            className={styles.dropDownItem}
        >
            {!isSelect
                ?
                <Circle
                    color="rgba(235, 235, 245, .5)"
                    size={16}
                />
                :
                <CircleDot  
                    color="#7e57c2"
                    size={16}
                    strokeWidth={3}
                />
            }
            {text}
        </li>
    )
}

export default DropDownRatioItem