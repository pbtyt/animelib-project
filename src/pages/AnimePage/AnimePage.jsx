import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimePage.module.css';

import {
	ArrowUpDown,
	Bookmark,
	ChevronDown,
	CirclePlay,
	Plus,
	SlidersHorizontal,
	Star,
	X,
} from 'lucide-react';

import useModal from '../../hooks/useModal';

import Comment from '../../components/Comment/Comment';
import ModalBase from '../../components/ModalBase/ModalBase';
import DropDown from '../../ui/DropDown/DropDown';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox';
import Input from '../../ui/Input/Input';

import { useParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { animeService } from '../../services/anime.service';

const AnimePage = () => {
	const { showModal } = useModal();
	const modalRef = useRef(null);

	const [activeTab, setActiveTab] = useState(1);

	const [animeData, setAnimeData] = useState({});

	// NOTE: Only for TEST
	const { setValue, storedValue } = useLocalStorage('folder', {});

	const [folder, setFolder] = useState('');

	const { id } = useParams();

	useEffect(() => {
		animeService
			.getAnimeTitleById(parseInt(id))
			.then(data => setAnimeData(data))
			.catch(er => console.error(er));
	}, [id]);

	return (
		<div className={styles.container}>
			<div className={styles.animeBg}>
				<img src={animeData?.background_url} alt='title bg' />
			</div>

			<div className={styles.content}>
				<div className={styles.info}>
					<div className={styles.poster}>
						<img src={animeData?.cover?.default} alt='poster' />
					</div>

					<button className={styles.playButton}>
						<CirclePlay size={18} strokeWidth={2} />
						<span className={styles.startWatch}>Начать смотреть</span>
						<div style={{ flexGrow: '1' }}></div>
						<span className={styles.epCount}>
							0 / {animeData?.episodes_count?.total}
						</span>
					</button>

					<DropDown
						useTemplate={true}
						template={
							<div className={styles.planButtons}>
								<button className={styles.addToPlans}>
									{folder !== '' ? (
										<Bookmark size={18} />
									) : (
										<Plus size={14} color='#bfbfbf' />
									)}
									<span className={styles.planBtnText}>
										{folder === '' ? 'Добавить в планы' : folder}
									</span>
								</button>

								<button className={styles.chevron}>
									<ChevronDown color='#bfbfbf' strokeWidth={2} size={18} />
								</button>
							</div>
						}
						minMenuWidth='100%'
						topOffset='-240'
					>
						{storedValue['UserFolders'].map(el => (
							<DropDownItem
								key={el.id}
								text={el.name}
								onClick={() => setFolder(el.name)}
							/>
						))}

						<DropDownItem
							text='Удалить из списка'
							additionalStyles={{ color: '#de7072' }}
							onClick={() => setFolder('')}
						/>
					</DropDown>

					<div className={styles.animeInfo}>
						<div className={styles.animeInfoItem}>
							<span className={styles.headerItemInfo}>Тип</span>
							<span className={styles.footerItemInfo}>{animeData?.type}</span>
						</div>

						<div className={styles.animeInfoItem}>
							<span className={styles.headerItemInfo}>Выпуск</span>
							<span className={styles.footerItemInfo}>
								{animeData?.release_date}
							</span>
						</div>

						<div className={styles.animeInfoItem}>
							<span className={styles.headerItemInfo}>Эпизоды</span>
							<span className={styles.footerItemInfo}>
								{animeData?.episodes_count?.uploaded} из{' '}
								{animeData?.episodes_count?.total}
							</span>
						</div>

						<div className={styles.animeInfoItem}>
							<span className={styles.headerItemInfo}>Статус</span>
							<span className={styles.footerItemInfo}>{animeData?.status}</span>
						</div>

						<div className={styles.animeInfoItem}>
							<span className={styles.headerItemInfo}>Автор</span>
							<span className={styles.footerItemInfo}>Gege Akutami</span>
						</div>

						<div className={styles.animeInfoItem}>
							<span className={styles.headerItemInfo}>Издатель</span>
							<span className={styles.footerItemInfo}>MAPPA</span>
						</div>
					</div>
				</div>

				<div className={styles.desc}>
					<div className={styles.titlesNRating}>
						<div className={styles.titles}>
							<span className={styles.ruTitle}>{animeData?.titles?.ru}</span>
							<span className={styles.engTitle}>{animeData?.titles?.eng}</span>
						</div>
						<div style={{ flexGrow: '1' }}></div>
						<div className={styles.rating}>
							<Star strokeWidth={3} color='#ffb656' size={20} />
							<span className={styles.ratingText}>{animeData?.rating}</span>
							<span className={styles.ratingCount}>3K</span>
						</div>
					</div>

					<div className={styles.animeDesc}>
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

						{activeTab === 1 && (
							<div className={styles.aboutAnime}>
								<p className={styles.animeDescText}>{animeData?.description}</p>
							</div>
						)}

						{activeTab === 2 && (
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
									<button
										className={styles.sortButton}
										onClick={() =>
											showModal(
												//! maybe move to sep. component ????
												<ModalBase contentRef={modalRef}>
													<div
														ref={modalRef}
														className={styles.settingsModalWrapper}
													>
														<div className={styles.settingsModalHeader}>
															<span>Настройки комментариев</span>
															<div style={{ flexGrow: '1' }}></div>
															<X size={14} color='#bfbfbf' />
														</div>

														<div className={styles.settingsModalFilters}>
															<div className={styles.settingsModalFilter}>
																<FilterCheckbox />
																<p>
																	<span>Отключить комментарии</span>
																	<span> </span>
																	<span style={{ fontWeight: '600' }}>
																		в плеере
																	</span>
																</p>
															</div>
															<div className={styles.settingsModalFilter}>
																<FilterCheckbox />
																<p>
																	<span>Отключить комментарии</span>
																	<span> </span>
																	<span style={{ fontWeight: '600' }}>
																		на странице тайтла
																	</span>
																</p>
															</div>
															<div className={styles.settingsModalFilter}>
																<FilterCheckbox defaultValue={true} />
																<span>Выделять новые комментарии</span>
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

								<div>
									<Comment />
									<Comment />
									<Comment />
									<Comment />
									<Comment />
									<Comment />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimePage;
