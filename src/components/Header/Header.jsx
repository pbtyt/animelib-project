import React from 'react'
import styles from './Header.module.css'

import { useNavigate } from 'react-router-dom'
import useModal from '../../hooks/useModal'

import { Layers, Search, MessagesSquare, LogIn, Ellipsis, Flame, Star, Compass, Users, User, SquareUser, GalleryVerticalEnd, Landmark, CircleUserRound } from 'lucide-react'

import DropDown from '../../ui/DropDown/DropDown'
import DropDownItem from '../../ui/DropDownItem/DropDownItem'
import HeaderButton from '../../ui/HeaderButton/HeaderButton'
import SearchModal from '../SearchModal/SearchModal'

const Header = () => {
    const navigate = useNavigate();
    const { showModal, hideModal } = useModal();
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.logoWrapper}>
            </div>
            <div className={styles.headerButtons}>
                <DropDown
                    button={
                        <HeaderButton
                            icon={<Layers color="#bfbfbf" width={16} height={16} strokeWidth={3} />}
                            text={"Каталог"}
                        />
                    }
                    topOffset='47'
                >
                    <div className={styles.grid}>
                        <div className={styles.col} style={{ paddingRight: '.65rem' }}>
                            <DropDownItem icon={<Layers color="#bfbfbf" width={14} height={14} strokeWidth={3} />}
                                text='Тайтлы'
                                isSelect={true}
                                onClick={() => { navigate("/catalog") }}
                            />
                            <DropDownItem icon={<Flame width={14} height={14} color='#bfbfbf' strokeWidth={3} />} text='Сейчас смотрят' />
                            <DropDownItem icon={<Star color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Коллекции' />
                            <DropDownItem icon={<Compass color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Отзывы и Рецензии' />
                            <DropDownItem icon={<Users color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Команды' />
                            <DropDownItem icon={<User color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Люди' />
                            <DropDownItem icon={<SquareUser color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Персонажи' />
                            <DropDownItem icon={<GalleryVerticalEnd color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Франшизы' />
                            <DropDownItem icon={<Landmark color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Издательства' />
                            <DropDownItem icon={<CircleUserRound color="#bfbfbf" width={14} height={14} strokeWidth={3} />} text='Пользователи' />
                        </div>
                        <div style={{ paddingLeft: '.65rem' }}>
                            <DropDownItem text='TV сериал' />
                            <DropDownItem text='Фильм' />
                            <DropDownItem text='Короткометражка' />
                            <DropDownItem text='Спешл' />
                            <DropDownItem text='OVA' />
                            <DropDownItem text='ONA' />
                            <DropDownItem text='Клип' />
                        </div>
                    </div>
                </DropDown>

                <HeaderButton
                    onClick={() => { showModal(<SearchModal />) }}
                    icon={<Search color="#bfbfbf" width={16} height={16} strokeWidth={3} />}
                    text='Поиск'
                />
                <HeaderButton
                    icon={<MessagesSquare color="#bfbfbf" width={16} height={16} strokeWidth={3} />}
                    text='Форум'
                />
                <HeaderButton
                    icon={<Ellipsis color="#bfbfbf" width={16} height={16} strokeWidth={3} />}
                    text=''
                />
            </div>
            <div className={styles.headerLogin}>
                <button className={styles.buttonLogin}>
                    <LogIn color='#fff' width={16} height={16} strokeWidth={4} />
                    <span>Вход | Регистрация</span>
                </button>
            </div>
        </div>
    )
}

export default Header