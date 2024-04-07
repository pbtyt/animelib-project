import React from 'react'
import styles from './DropDownItem.module.css'

const DropDownItem = ({ text = 'default', isSelect, icon = null, onClick=()=>{} }) => {
  return (
    // !TODO: Add icons and spacing for it
      !icon ? 
      <li
        className={`${styles.dropDownItem} ${isSelect ? styles.active : ''}`}
        onClick={onClick}
      >
        {text}
      </li>
      :
      <li
        className={`${styles.dropDownItem} ${isSelect ? styles.active : ''} ${styles.wicon}`}
        onClick={onClick}
      >
        {icon}
        {text}
      </li>
  )
}

export default DropDownItem