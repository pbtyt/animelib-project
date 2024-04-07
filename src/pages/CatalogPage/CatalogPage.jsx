import React from 'react'
import styles from './CatalogPage.module.css'

import Catalog from '../../components/Catalog/Catalog'
import DropDown from '../../ui/DropDown/DropDown'
import DropDownRatioItem from '../../ui/DropDownRatioItem/DropDownRatioItem'
import Input from '../../ui/Input/Input'

const CatalogPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.pageHeader}>
            <span className={styles.sectionTitle}>Каталог</span>
            <div style={{flexGrow: '1'}}></div>
            <DropDown dropDownTitle={'По популярности'} minMenuWidth='205'>
                <DropDownRatioItem text='По популярности' isSelect={true}/>
                <DropDownRatioItem text='По рейтингу'/>
                <DropDownRatioItem text='По просмотрам'/>
                <DropDownRatioItem text='По кол-ву эпизодов'/>
                <DropDownRatioItem text='Дате обновления'/>
                <DropDownRatioItem text='Дате добавления'/>
                <DropDownRatioItem text='По названию (A-Z)'/>
                <DropDownRatioItem text='По названию (А-Я)'/>
                
                {/* border */}
                <div
                    style={{height: '1px',background: 'rgba(84, 84, 88, .65)', width: '100%', margin: '.4rem auto'}}
                >
                </div>
                {/* border */}

                <DropDownRatioItem text='По убыванию'/>
                <DropDownRatioItem text='По возрастанию'/>
            </DropDown>
        </div>
        <Input/>
        <Catalog/>
    </div>
  )
}

export default CatalogPage