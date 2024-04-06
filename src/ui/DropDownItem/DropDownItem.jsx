import React from 'react'
import styles from './DropDownItem.module.css'

const DropDownItem = ({ text = 'default', isSelect }) => {
  return (
    // !TODO: Add icons and spacing for it
    <li
      className={`${styles.dropDownItem} ${isSelect ? styles.active : ''}`}
    >{text}</li>
  )
}

export default DropDownItem