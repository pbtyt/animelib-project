import React from 'react'
import styles from './Filter.module.css'
import FilterSection from '../../ui/FilterSection/FilterSection'
import Input from '../../ui/Input/Input'

const Filter = () => {
  return (
    <div className={styles.filterWrapper}>
        <FilterSection sectionTitle="Жанры"/>
        <FilterSection sectionTitle="Теги"/>
        
        <span className={styles.title}>Количество эпизодов</span>
        <div className={styles.epQ}>
            <Input type='number' inputmode='numeric' placeholder='От' minValue='0'/>
            <Input type='number' inputmode='numeric' placeholder='До' minValue='0'/>
        </div>
        
        <span className={styles.title}>Год релиза</span>
        <div className={styles.epQ}>
            <Input type='number' inputmode='numeric' placeholder='От' minValue='1930'/>
            <Input type='number' inputmode='numeric' placeholder='До' minValue='1930'/>
        </div>
        
        <span className={styles.title}>Оценка</span>
        <div className={styles.epQ}>
            <Input type='number' inputmode='numeric' placeholder='От' minValue='0' maxValue='10'/>
            <Input type='number' inputmode='numeric' placeholder='До' minValue='0' maxValue='10'/>
        </div>
        
        <span className={styles.title}>Количество оценок</span>
        <div className={styles.epQ}>
            <Input type='number' inputmode='numeric' placeholder='От' minValue='0'/>
            <Input type='number' inputmode='numeric' placeholder='До' minValue='0'/>
        </div>
    </div>
  )
}

export default Filter