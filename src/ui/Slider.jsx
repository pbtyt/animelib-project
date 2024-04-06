import React, { useState, useRef, useEffect, useContext } from 'react'

import styles from './Slider.module.css'

const Slider = ({ defaultValue = 0, sliderWidth = "100", hoverWindowBottomOffset = "12", type = "volume" }) => {
  const sliderRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(defaultValue);

  return (
    <div className={styles.sliderWrapper} ref={sliderRef} style={{ width: `${sliderWidth}px` }}>
      <input type="hidden" name='slider' />
      <div className={styles.slider} style={{ width: `${sliderValue}%` }}></div>
    </div>
  )
}

export default Slider