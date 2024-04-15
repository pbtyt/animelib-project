import React from 'react'
import styles from './CatalogPage.module.css'

import { Search } from 'lucide-react'

import Catalog from '../../components/Catalog/Catalog'
import DropDown from '../../ui/DropDown/DropDown'
import DropDownRatioItem from '../../ui/DropDownRatioItem/DropDownRatioItem'
import Input from '../../ui/Input/Input'
import Filter from '../../components/Filter/Filter'

const CatalogPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.catalogWrapper}>
        <div className={styles.catalogHeader}>
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
        <Input icon={<Search size={16} color='#bfbfbf' strokeWidth={2} />}/>
        <Catalog/>
      </div>

      <div className={styles.filterWrapper}>
        <Filter/>
      </div>
    </div>
  )
}

export default CatalogPage