import React, { useState } from 'react'
import styles from './Input.module.css'

import { Search, X } from 'lucide-react'

const Input = ({ placeholder = "Поиск по названию", type = "text", inputmode = "", minValue="", maxValue="" }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className={styles.inputWrapper}>
            {
                type==="text" ?
                <Search size={16} color='#bfbfbf' strokeWidth={2} />
                : <></>
            }

            <input type={type} inputMode={inputmode} placeholder={placeholder} min={minValue} max={maxValue} value={inputValue} className={styles.input}
                onChange={(event) => { setInputValue(event.target.value) }}
            />
            {
                inputValue.length > 0 ?
                    <X size={12} color="#bfbfbf" strokeWidth={2} style={{ cursor: 'pointer' }} onClick={() => { setInputValue('') }} />
                    : <></>
            }
        </div>
    )
}

export default Input