import React from 'react'
import styles from './Filter.module.css'
import FilterSection from '../../ui/FilterSection/FilterSection'
import Input from '../../ui/Input/Input'
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox'

import { Dices } from 'lucide-react'

const Filter = () => {
    return (
        <div className={styles.filterWrapper}>
            <div className={styles.scroll}>
                <FilterSection sectionTitle="Жанры" />
                <FilterSection sectionTitle="Теги" />

                <span className={styles.title}>Количество эпизодов</span>
                <div className={styles.epQ}>
                    <Input type='number' inputmode='numeric' placeholder='От' minValue='0' padding='4.7' />
                    <span className={styles.dash}>—</span>
                    <Input type='number' inputmode='numeric' placeholder='До' minValue='0' padding='4.7' />
                </div>

                <span className={styles.title}>Год релиза</span>
                <div className={styles.epQ}>
                    <Input type='number' inputmode='numeric' placeholder='От' minValue='1930' padding='4.7' />
                    <span className={styles.dash}>—</span>
                    <Input type='number' inputmode='numeric' placeholder='До' minValue='1930' padding='4.7' />
                </div>

                <span className={styles.title}>Оценка</span>
                <div className={styles.epQ}>
                    <Input type='number' inputmode='numeric' placeholder='От' minValue='0' maxValue='10' padding='4.7' />
                    <span className={styles.dash}>—</span>
                    <Input type='number' inputmode='numeric' placeholder='До' minValue='0' maxValue='10' padding='4.7' />
                </div>

                <span className={styles.title}>Количество оценок</span>
                <div className={styles.epQ}>
                    <Input type='number' inputmode='numeric' placeholder='От' minValue='0' padding='4.7' />
                    <span className={styles.dash}>—</span>
                    <Input type='number' inputmode='numeric' placeholder='До' minValue='0' padding='4.7' />
                </div>

                <span className={styles.title}>Тип</span>
                <div className={styles.fCheckboxes}>
                    <FilterCheckbox checkboxText='TV Сериал' />
                    <FilterCheckbox checkboxText='Фильм' />
                </div>

                <span className={styles.title}>Статус тайтла</span>
                <div className={styles.fCheckboxes}>
                    <FilterCheckbox checkboxText='Онгоинг' />
                    <FilterCheckbox checkboxText='Завершён' />
                    <FilterCheckbox checkboxText='Анонс' />
                </div>
            </div>

            <div className={styles.filterFooter}>
                <button
                    style={{ border: '1px solid rgba(80, 80, 80, .5)', color: '#b0b3b8', 
                             fontFamily: 'inherit', fontSize: '100%', 
                             padding: '0 18px', flex: '1 0 0', lineHeight: '30px',
                             textAlign: 'center', fontWeight: '400', userSelect: 'none'
                          }}
                >
                    Сбросить
                </button>

                <button
                    style={{ backgroundColor: '#5e35b1', color: 'white', 
                             fontFamily: 'inherit', fontSize: '100%', 
                             padding: '0 18px', flex: '1 0 0', lineHeight: '30px',
                             textAlign: 'center', fontWeight: '400', userSelect: 'none'
                          }}
                >
                    Применить
                </button>

                <button
                    style={{ border: '1px solid rgba(80, 80, 80, .5)', display: 'flex', 
                             alignItems: 'center', justifyContent: 'center', 
                             padding: '4px', backgroundColor: '#2C2C30'
                          }}
                >
                    <Dices size={22} color='#bfbfbf' strokeWidth={1}/>
                </button>
            </div>
        </div>
    )
}

export default Filter