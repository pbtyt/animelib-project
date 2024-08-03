import {
	ArrowLeft,
	Bell,
	Ellipsis,
	Info,
	Play,
	Plus,
	Star,
} from 'lucide-react';
import React, { useState } from 'react';

import Scroller from '../../components/Scroller/Scroller';
import Button from '../../ui/Button/Button';
import styles from './MobileAnimePage.module.css';

import MobileAboutModal from '../../components/MobileViewComponents/MobileAboutModal/MobileAboutModal';
import MobileEditFolderModal from '../../components/MobileViewComponents/MobileEditFolderModal/MobileEditFolderModal';
import useModal from '../../hooks/useModal';

const MobileAnimePage = ({ animeData }) => {
	console.warn('[MobileAnimePage] Re-Render');

	const { showModal } = useModal();

	const [activeTab, setActiveTab] = useState(1);
	const [isDescHidden, setIsDescHidden] = useState(true);
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<ArrowLeft color='#bfbfbf' size={18} strokeWidth={2} />

				<div className={styles.headerRight}>
					<button className={styles.notificationButton}>
						<Bell color='#b39ddb' size={16} strokeWidth={2} />
						<span>Уведомления</span>
					</button>
					<Ellipsis color='#bfbfbf' size={18} strokeWidth={2} />
				</div>
			</div>
			<div className={styles.coverWrapper}>
				<img
					src={
						animeData?.cover?.default ||
						'../placeholders/mobilepage/poster_placeholder.jpg'
					}
					alt='poster'
					className={styles.cover}
				/>
				<Button
					styleIndex={0}
					additionalStyles={{
						padding: '4px .6rem',
						borderRadius: '12px',
						position: 'absolute',
						bottom: '10px',
					}}
				>
					<Star fill='#ffb656' size={16} strokeWidth={0} />
					<span style={{ fontWeight: '600' }}>
						{animeData?.rating || '10.0'}
					</span>
				</Button>
			</div>

			<div
				className={styles.titles}
				onClick={() => showModal(<MobileAboutModal />)}
			>
				<div className={styles.title}>
					<Info fill='#2C2C30' color='black' size={20} />
					<span>
						{animeData?.titles?.ru || 'Госпожа Кагуя: в любви как на войне 2'}
					</span>
				</div>
				<h2 className={styles.subtitle}>
					{animeData?.titles?.title || 'Kaguya-sama: Love is War Season 2'}
				</h2>
			</div>

			<div className={styles.buttons}>
				<Button
					styleIndex={0}
					additionalStyles={{
						padding: '4px 15px',
						lineHeight: '25px',
						flexGrow: '1',
					}}
					onClick={() => showModal(<MobileEditFolderModal />)}
				>
					<Plus color='#bfbfbf' strokeWidth={2} size={14} />
					<span className={styles.buttonTitle}>Добавить в</span>
				</Button>
				<Button
					styleIndex={1}
					additionalStyles={{
						padding: '4px 15px',
						backgroundColor: '#5e35b1',
						lineHeight: '25px',
						flexGrow: '.7',
					}}
				>
					<Play fill='#fff' size={16} strokeWidth={0} />
					<span className={styles.buttonTitle}>Смотреть</span>
					<span className={styles.episodesCount}>
						{animeData?.episodes_count?.uploaded || '12'} /{' '}
						{animeData?.episodes_count?.total || '12'}
					</span>
				</Button>
			</div>

			<div className={styles.main}>
				<div className={styles.tabs}>
					<div className={styles.tab} onClick={() => setActiveTab(1)}>
						<span
							className={`${styles.tabText} ${
								activeTab === 1 ? styles.isActive : ''
							}`}
						>
							О тайтле
						</span>
					</div>

					<div className={styles.tab} onClick={() => setActiveTab(2)}>
						<span
							className={`${styles.tabText} ${
								activeTab === 2 ? styles.isActive : ''
							}`}
						>
							Комментарии
						</span>
					</div>

					<div className={styles.tab} onClick={() => setActiveTab(3)}>
						<span
							className={`${styles.tabText} ${
								activeTab === 3 ? styles.isActive : ''
							}`}
						>
							Отзывы
						</span>
					</div>
				</div>
				<Scroller>
					<div className={styles.info}>
						<div className={styles.infoItem}>
							<span className={styles.itemSubtitle}>Тип</span>
							<span>TV сериалы</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.itemSubtitle}>Статус</span>
							<span>Завершён</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.itemSubtitle}>Эпизоды</span>
							<span>
								12 <span className={styles.itemSubtitle}>из</span> 12{' '}
								<span className={styles.itemSubtitle}>[24 мин.]</span>
							</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.itemSubtitle}>Выпуск</span>
							<span>11 апреля 2020 г.</span>
						</div>
					</div>{' '}
				</Scroller>

				<div className={styles.auPbInfo}>
					<Button
						styleIndex={0}
						additionalStyles={{
							gap: '10px',
							backgroundColor: '#252527',
							height: '45px',
						}}
					>
						<img
							src='../placeholders/mobilepage/author_placeholder.jpg'
							alt='author_Poster'
							width={28}
							height={28}
							style={{
								borderRadius: '50%',
								objectFit: 'cover',
								objectPosition: 'center',
							}}
						/>
						<div
							style={{
								display: 'flex',
								alignItems: 'flex-start',
								flexDirection: 'column',
							}}
						>
							<span>Aka Akasaka</span>
							<span style={{ fontSize: '10px', color: '#ebebf580' }}>
								Автор
							</span>
						</div>
					</Button>
					<Button
						styleIndex={0}
						additionalStyles={{
							gap: '10px',
							backgroundColor: '#252527',
							height: '45px',
						}}
					>
						<img
							src='../placeholders/mobilepage/publisher_placeholder.png'
							alt='publisher_Poster'
							width={28}
							height={28}
							style={{
								borderRadius: '50%',
								objectFit: 'cover',
								objectPosition: 'center',
							}}
						/>
						<div
							style={{
								display: 'flex',
								alignItems: 'flex-start',
								flexDirection: 'column',
							}}
						>
							<span>A-1 Pictures</span>
							<span style={{ fontSize: '10px', color: '#ebebf580' }}>
								Издатель
							</span>
						</div>
					</Button>
				</div>

				<div className={styles.descGenrSection}>
					<div className={styles.descWrapper}>
						<p
							className={`${styles.desc} ${isDescHidden ? styles.hidden : ''}`}
						>
							{animeData?.description ||
								'Трудолюбивый Миюки Сироганэ  и первая красавица Кагуя Синомия  — два общепризнанных гения престижной академии Сютин, возглавляющие её студсовет. Они по-прежнему ведут свою любовную войну, отрицая чувства к друг другу, ведь признание в их романтическом поединке означает поражение!\n\nОднако для текущего студсовета год подходит к концу. Пути товарищей разойдутся по разным классам, почти не оставив точек для пересечения. К тому же на горизонте возникает новый соперник на должность президента студсовета. Что будут делать ребята? И кто же наконец выйдет победителем в этой любовной войне?'}
						</p>
						<button
							style={{ color: '#b388ff' }}
							onClick={() => setIsDescHidden(prev => !prev)}
						>
							{isDescHidden ? 'Подробнее...' : 'Свернуть'}
						</button>
					</div>

					<div className={styles.genresWrapper}>
						{animeData?.genres?.map((genreTitle, index) => (
							<Button
								key={index}
								styleIndex={0}
								additionalStyles={{ backgroundColor: '#252527' }}
							>
								{genreTitle}
							</Button>
						)) ||
							['Комедия', 'Сэйнэн', 'Школа'].map((genreTitle, index) => (
								<Button
									key={index}
									styleIndex={0}
									additionalStyles={{ backgroundColor: '#252527' }}
								>
									{genreTitle}
								</Button>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileAnimePage;
