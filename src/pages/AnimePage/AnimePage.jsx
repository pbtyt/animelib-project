import React from 'react'
import styles from './AnimePage.module.css'

import { Play, CirclePlay, Plus, ChevronDown, Star, ArrowUpDown, SlidersHorizontal } from 'lucide-react'

import Input from '../../ui/Input/Input'

const AnimePage = () => {
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

              <div className={styles.tab}>
                <span className={`${styles.tabText} ${styles.isActive}`}>О тайтле</span>
              </div>

              <div className={styles.tab}>
                <span className={styles.tabText}>Комментарии</span>
              </div>

              <div className={styles.tab}>
                <span className={styles.tabText}>Отзывы</span>
              </div>

            </div>

            <div className={styles.aboutAnime}>
              <p className={styles.animeDescText}>
                Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепочке и любой ничего не подозревающий обыватель при известной доле невезения может оказаться съеденным демоном. Пускай люди в большинстве своём не знают о существовании демонов, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона Рёмэна Сукуны, которого с большим трудом удалось одолеть. Его тело было поделено на части, которые оказались разбросаны по миру. Если найдётся демон, который поглотит все фрагменты его плоти, то он обретёт мощь, способную уничтожить человеческую цивилизацию.
                Вот такая сложилась ситуация в мире, где в полном неведении о нависшей над человечеством угрозе проживает старшеклассник Юдзи Итадори. У Юдзи совершенно иные заботы. Он каждый день навещает в больнице дедушку и отбрыкивается от спортивных кружков, которые мечтают заполучить его из-за выдающейся физической силы и выносливости. Юдзи предпочёл вступить в клуб оккультных наук, с которого и начинаются все неприятности, когда в руки членов клуба попадает предмет, на который наложено проклятье. Не долго думая, школьники разбивают запечатывающее заклинание и выпускают на свет ужасные силы...
              </p>
            </div>

            <div className={styles.comments}>

              <div className={styles.sortButtons}>
                <button>
                  <ArrowUpDown size={14} />
                  <span>Новые</span>
                </button>
                <button>
                  <SlidersHorizontal size={14} />
                  <span>Настройки</span>
                </button>
              </div>

              <div style={{ padding: '12px 0' }}>
                <Input placeholder='Написать комментарий...' padding='12' />
              </div>

              <div style={{height: '100px'}}>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimePage