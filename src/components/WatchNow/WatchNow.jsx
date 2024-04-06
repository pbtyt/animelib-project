import React from 'react'

import styles from './WatchNow.module.css'

import {ChevronRight} from 'lucide-react'

import WatchNowItem from '../WacthNowItem/WatchNowItem'
import DropDown from '../../ui/DropDown/DropDown'
import DropDownItem from '../../ui/DropDownItem/DropDownItem'

const WatchNow = () => {
  return (
    <div className={styles.watchNowWrapper}>
      <div className={styles.watchNowHeader}>
        <span className={styles.watchNowTitle}>Сейчас смотрят</span>
        
        <DropDown dropDownTitle={"За день"}>
          <DropDownItem text={'За день'} isSelect={true}/>
          <DropDownItem text={'За неделю'}/>
          <DropDownItem text={'За месяц'}/>
        </DropDown>

        <div style={{flexGrow: '1'}}></div>
        <button
          style={{padding: '4px 10px', border: '1px solid #3a3a40', color: '#bfbfbf',
                  backgroundColor: '#2c2c30', fontSize: '12px',
                  display: 'flex', alignItems: 'center', gap: '.25rem'
                }}
        >
          <span>
            Показать ещё
          </span>
          <ChevronRight width={16} height={16} strokeWidth={1.8}/>
        </button>
      </div>

      <div className={styles.watchNowContent}>
        <WatchNowItem subTitle='Новинки'/>
        <WatchNowItem subTitle='Набирающее популярность'/>
        <WatchNowItem subTitle='Популярное'/>
      </div>

    </div>
  )
}

export default WatchNow