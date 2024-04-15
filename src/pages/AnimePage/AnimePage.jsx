import React, { useRef, useState } from 'react'
import styles from './AnimePage.module.css'

import { Play, CirclePlay, Plus, ChevronDown, Star, ArrowUpDown, SlidersHorizontal, X } from 'lucide-react'

import useModal from '../../hooks/useModal'

import Input from '../../ui/Input/Input'
import DropDown from '../../ui/DropDown/DropDown'
import DropDownItem from '../../ui/DropDownItem/DropDownItem'
import ModalBase from '../../components/ModalBase/ModalBase'
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox'

const AnimePage = () => {
  const { showModal } = useModal();
  const modalRef = useRef(null);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.animeBg}>
        <img src="jjk-bg.jpg" alt="title bg" />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.poster}>
            <img src="./posters/jujutsu-kaisen.jpg" alt="poster" />
          </div>

          <button className={styles.playButton}>
            <CirclePlay size={18} strokeWidth={2} />
            <span className={styles.startWatch}>
              Начать смотреть
            </span>
            <div style={{ flexGrow: '1' }}></div>
            <span className={styles.epCount}>0 / 24</span>
          </button>

          <div className={styles.planButtons}>
            <button className={styles.addToPlans}>
              <Plus size={14} color='#bfbfbf' />
              <span className={styles.planBtnText}>Добавить в планы</span>
            </button>

            <button className={styles.chevron}>
              <ChevronDown color='#bfbfbf' strokeWidth={2} size={18} />
            </button>
          </div>

          <div className={styles.animeInfo}>

            <div className={styles.animeInfoItem}>
              <span className={styles.headerItemInfo}>
                Тип
              </span>
              <span className={styles.footerItemInfo}>
                TV сериалы
              </span>
            </div>

            <div className={styles.animeInfoItem}>
              <span className={styles.headerItemInfo}>
                Выпуск
              </span>
              <span className={styles.footerItemInfo}>
                03 октября 2020 г.
              </span>
            </div>

            <div className={styles.animeInfoItem}>
              <span className={styles.headerItemInfo}>
                Эпизоды
              </span>
              <span className={styles.footerItemInfo}>
                24 из 24
              </span>
            </div>

            <div className={styles.animeInfoItem}>
              <span className={styles.headerItemInfo}>
                Статус
              </span>
              <span className={styles.footerItemInfo}>
                Завершён
              </span>
            </div>

            <div className={styles.animeInfoItem}>
              <span className={styles.headerItemInfo}>
                Автор
              </span>
              <span className={styles.footerItemInfo}>
                Gege Akutami
              </span>
            </div>

            <div className={styles.animeInfoItem}>
              <span className={styles.headerItemInfo}>
                Издатель
              </span>
              <span className={styles.footerItemInfo}>
                MAPPA
              </span>
            </div>

          </div>
        </div>

        <div className={styles.desc}>
          <div className={styles.titlesNRating}>
            <div className={styles.titles}>
              <span className={styles.ruTitle}>
                Магическая битва
              </span>
              <span className={styles.engTitle}>
                Jujutsu Kaisen
              </span>
            </div>
            <div style={{ flexGrow: '1' }}></div>
            <div className={styles.rating}>
              <Star strokeWidth={3} color='#ffb656' size={20} />
              <span className={styles.ratingText}>9.31</span>
              <span className={styles.ratingCount}>3K</span>
            </div>
          </div>

          <div className={styles.animeDesc}>
            <div className={styles.tabs}>

              <div className={styles.tab}
                onClick={()=>setActiveTab(1)}
              >
                <span className={`${styles.tabText} ${ activeTab === 1 ? styles.isActive : "" }`}>О тайтле</span>
              </div>

              <div className={styles.tab}
                onClick={()=>setActiveTab(2)}
              >
                <span className={`${styles.tabText} ${ activeTab === 2 ? styles.isActive : "" }`}>Комментарии</span>
              </div>

              <div className={styles.tab}
                onClick={()=>setActiveTab(3)}
              >
                <span className={`${styles.tabText} ${ activeTab === 3 ? styles.isActive : "" }`}>Отзывы</span>
              </div>

            </div>

            {
              activeTab === 1 &&
              <div className={styles.aboutAnime}>
                <p className={styles.animeDescText}>
                  Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепочке и любой ничего не подозревающий обыватель при известной доле невезения может оказаться съеденным демоном. Пускай люди в большинстве своём не знают о существовании демонов, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона Рёмэна Сукуны, которого с большим трудом удалось одолеть. Его тело было поделено на части, которые оказались разбросаны по миру. Если найдётся демон, который поглотит все фрагменты его плоти, то он обретёт мощь, способную уничтожить человеческую цивилизацию.
                  Вот такая сложилась ситуация в мире, где в полном неведении о нависшей над человечеством угрозе проживает старшеклассник Юдзи Итадори. У Юдзи совершенно иные заботы. Он каждый день навещает в больнице дедушку и отбрыкивается от спортивных кружков, которые мечтают заполучить его из-за выдающейся физической силы и выносливости. Юдзи предпочёл вступить в клуб оккультных наук, с которого и начинаются все неприятности, когда в руки членов клуба попадает предмет, на который наложено проклятье. Не долго думая, школьники разбивают запечатывающее заклинание и выпускают на свет ужасные силы...
                </p>
              </div>
            }

            {
              activeTab === 2 &&
              <div className={styles.comments}>

                <div className={styles.sortButtons}>
                  <DropDown
                    button={
                      <button className={styles.sortButton}>
                        <ArrowUpDown size={14} />
                        <span className={styles.sortButtonText}>Новые</span>
                      </button>
                    }
                  >
                    <DropDownItem text={'Новые'} isSelect={true} />
                    <DropDownItem text={'Старые'} />
                    <DropDownItem text={'Популярные'} />
                  </DropDown>
                  <button className={styles.sortButton}
                    onClick={
                      () =>
                        showModal(
                          //! maybe move to sep. component ????
                          <ModalBase contentRef={modalRef}>
                            <div ref={modalRef} className={styles.settingsModalWrapper}>

                              <div className={styles.settingsModalHeader}>
                                <span>Настройки комментариев</span>
                                <div style={{ flexGrow: '1' }}></div>
                                <X size={14} color='#bfbfbf' />
                              </div>

                              <div className={styles.settingsModalFilters}>
                                <div className={styles.settingsModalFilter}>
                                  <FilterCheckbox />
                                  <span>
                                    Отключить комментарии в плеере
                                  </span>
                                </div>
                                <div className={styles.settingsModalFilter}>
                                  <FilterCheckbox />
                                  <span>
                                    Отключить комментарии на странице тайтла
                                  </span>
                                </div>
                                <div className={styles.settingsModalFilter}>
                                  <FilterCheckbox defaultValue={true} />
                                  <span>
                                    Выделять новые комментарии
                                  </span>
                                </div>
                              </div>

                            </div>
                          </ModalBase>
                        )
                    }
                  >
                    <SlidersHorizontal size={14} />
                    <span className={styles.sortButtonText}>Настройки</span>
                  </button>
                </div>

                <div style={{ padding: '12px 0' }}>
                  <Input placeholder='Написать комментарий...' padding='12' />
                </div>

                <div style={{ height: '100px' }}>

                </div>

              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimePage