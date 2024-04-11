import React from 'react'
import styles from './CatalogCardHover.module.css'

const CatalogCardHover = () => {
    return (
        <div className={styles.ccHoverWrapper}>
            <div className={styles.ccHoverHeader}>
                <span className={styles.ccHoverTitle}>Магическая битва</span>
                <span className={styles.ccHoverEngTitle}>Jujutsu Kaisen</span>
            </div>
            <div className={styles.ccHoverInfo}>
                <div className={styles.infoItem}>
                    <span className={styles.infoItemH}>Статус</span>
                    <span className={styles.infoItemC}>Завершен</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoItemH}>Выпуск</span>
                    <span className={styles.infoItemC}>03 октября 2020 г.</span>
                </div>
                <div className={styles.infoItem}>
                    <span className={styles.infoItemH}>Эпизоды</span>
                    <span className={styles.infoItemC}>24 из 24 [23 мин.]</span>
                </div>
            </div>
            <div className={styles.ccHoverDesc}>
                <span>
                    Действие аниме происходит в мире, где люди оказались вовсе не последним звеном в пищевой цепочке и любой ничего не подозревающий обыватель при известной доле невезения может оказаться съеденным демоном. Пускай люди в большинстве своём не знают о существовании демонов, те имеют уже давнюю историю, одним из эпизодов которой являются деяния легендарного демона Рёмэна Сукуны, которого с большим трудом удалось одолеть. Его тело было поделено на части, которые оказались разбросаны по миру. Если найдётся демон, который поглотит все фрагменты его плоти, то он обретёт мощь, способную уничтожить человеческую цивилизацию.\r\nВот такая сложилась ситуация в мире, где в полном неведении о нависшей над человечеством угрозе проживает старшеклассник Юдзи Итадори. У Юдзи совершенно иные заботы. Он каждый день навещает в больнице дедушку и отбрыкивается от спортивных кружков, которые мечтают заполучить его из-за выдающейся физической силы и выносливости. Юдзи предпочёл вступить в клуб оккультных наук, с которого и начинаются все неприятности, когда в руки членов клуба попадает предмет, на который наложено проклятье. Не долго думая, школьники разбивают запечатывающее заклинание и выпускают на свет ужасные силы...
                </span>
            </div>
        </div>
    )
}

export default CatalogCardHover