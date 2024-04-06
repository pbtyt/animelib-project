import React from 'react'
import { Layers, Search, MessagesSquare, LogIn, Ellipsis } from 'lucide-react'
import styles from './Header.module.css'
import DropDown from '../../ui/DropDown/DropDown'
import DropDownItem from '../../ui/DropDownItem/DropDownItem'
import HeaderButton from '../../ui/HeaderButton/HeaderButton'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
        </div>
        <div className={styles.headerButtons}>
            <DropDown 
                button={
                    <HeaderButton 
                        icon={<Layers color="#bfbfbf" width={16} height={16} strokeWidth={3}/>} 
                        text={"Каталог"}
                    />
                }
            >
                <div className={styles.grid}>
                    <div className={styles.col} style={{paddingRight: '.65rem'}}>
                        <DropDownItem text='Тайтлы'/>
                        <DropDownItem text='Сейчас смотрят'/>
                        <DropDownItem text='Коллекции'/>
                        <DropDownItem text='Отзывы и Рецензии'/>
                        <DropDownItem text='Команды'/>
                        <DropDownItem text='Люди'/>
                        <DropDownItem text='Персонажи'/>
                        <DropDownItem text='Франшизы'/>
                        <DropDownItem text='Издательства'/>
                        <DropDownItem text='Пользователи'/>
                    </div>
                    <div style={{paddingLeft: '.65rem'}}>
                        <DropDownItem text='TV сериал'/>
                        <DropDownItem text='Фильм'/>
                        <DropDownItem text='Короткометражка'/>
                        <DropDownItem text='Спешл'/>
                        <DropDownItem text='OVA'/>
                        <DropDownItem text='ONA'/>
                        <DropDownItem text='Клип'/>
                    </div>
                </div>
            </DropDown>
            
            <HeaderButton
                icon={<Search color="#bfbfbf" width={16} height={16} strokeWidth={3}/>}
                text='Поиск'
            />
            <HeaderButton
                icon={<MessagesSquare color="#bfbfbf" width={16} height={16} strokeWidth={3}/>}
                text='Форум'
            />
            <HeaderButton
                icon={<Ellipsis color="#bfbfbf" width={16} height={16} strokeWidth={3}/>}
                text=''
            />
        </div>
        <div className={styles.headerLogin}>
            <button className={styles.buttonLogin}>
                <LogIn color='#fff' width={16} height={16} strokeWidth={4}/>
                <span>Вход | Регистрация</span>
            </button>
        </div>
    </div>
  )
}

export default Header