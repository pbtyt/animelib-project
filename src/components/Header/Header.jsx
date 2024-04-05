import React from 'react'
import { Layers, Search, MessagesSquare, LogIn, Ellipsis } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
        </div>
        <div className={styles.headerButtons}>
            <button className={styles.button}>
                <Layers color="#bfbfbf" width={16} height={16} strokeWidth={3}/>
                <span className={styles.buttonText}>Каталог</span>
            </button>
            <button className={styles.button}>
                <Search color="#bfbfbf" width={16} height={16} strokeWidth={3}/>
                <span className={styles.buttonText}>Поиск</span>
            </button>
            <button className={styles.button}>
                <MessagesSquare color="#bfbfbf" width={16} height={16} strokeWidth={3}/>
                <span className={styles.buttonText}>Форум</span>
            </button>
            <button className={styles.button}>
                <Ellipsis color="#bfbfbf" width={16} height={16} strokeWidth={3}/>
            </button>
        </div>
        <div className={styles.headerLogin}>
            <button className={styles.buttonLogin}>
                <LogIn color='#fff' width={14} height={14} strokeWidth={4}/>
                <span>Вход | Регистрация</span>
            </button>
        </div>
    </div>
  )
}

export default Header