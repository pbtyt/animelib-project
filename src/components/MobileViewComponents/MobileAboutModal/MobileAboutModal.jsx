import React from 'react';
import styles from './MobileAboutModal.module.css';

import ModalBase from '../../ModalBase/ModalBase';

const MobileAboutModal = () => {
	return (
		<ModalBase
			modalWindowWidth='100%'
			additionalStyles={{
				alignSelf: 'flex-end',
				margin: '0',
				backgroundColor: 'transparent',
				padding: '0 8px 8px',
			}}
			appearanceAnimationClassName={styles.appearance}
			disappearanceAnimationClassName={styles.disappearance}
		>
			<div className={styles.wrapper}>
				<div className={styles.titleCategory}>
					<span className={styles.categorySubtitle}>Название на русском</span>
					<span className={styles.categoryTitle}>
						Госпожа Кагуя: в любви как на войне 2
					</span>
				</div>
				<div className={styles.titleCategory}>
					<span className={styles.categorySubtitle}>Оригинальное название</span>
					<span className={styles.categoryTitle}>
						Kaguya-sama wa Kokurasetai? Tensai-tachi no Renai Zunousen
					</span>
				</div>
				<div className={styles.titleCategory}>
					<span className={styles.categorySubtitle}>
						Название на английском
					</span>
					<span className={styles.categoryTitle}>
						Kaguya-sama: Love is War Season 2
					</span>
				</div>
				<div className={styles.titleCategory}>
					<span className={styles.categorySubtitle}>
						Альтернативные названия
					</span>
					<span className={styles.categoryTitle}>
						Kaguya Wants to be Confessed To: The Geniuses' War of Love and
						Brains 2nd Season
					</span>
					<span className={styles.categoryTitle}>
						Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 2nd
						Season
					</span>
					<span className={styles.categoryTitle}>
						Kaguya-sama: Love is War 2nd SeasonГоспожа Кагуя: в любви как на
						войне?
					</span>
					<span className={styles.categoryTitle}>
						Госпожа Кагуя: в любви как на войне?
					</span>
					<span className={styles.categoryTitle}>
						Кагуя хочет, чтобы ей признались: Гении — Война любви и разума 2
					</span>
					<span className={styles.categoryTitle}>
						かぐや様は告らせたい？～天才たちの恋愛頭脳戦～
					</span>
				</div>
			</div>
		</ModalBase>
	);
};

export default MobileAboutModal;
