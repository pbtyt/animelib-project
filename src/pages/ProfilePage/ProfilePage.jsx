import React from 'react';
import styles from './ProfilePage.module.css';

import { LayoutGrid, List, Settings } from 'lucide-react';

import ProfileListAnimeCardItem from '../../components/ProfileListAnimeCardItem/ProfileListAnimeCardItem';

import DropDownItem from '../../ui/DropDownItem/DropDownItem';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import Input from '../../ui/Input/Input';

import TProfilePageFilterSectionItem from '../../templates/TProfilePageFilterSectionItem';
import DropDownRatioItem from '../../ui/DropDownRatioItem/DropDownRatioItem';

const ProfilePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profilePageHeader}>
				<div className={styles.profileInfo}>
					<div className={styles.userIcon}></div>

					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '.1rem' }}
					>
						<span className={styles.userName}>blad3</span>
						<span className={styles.userLevel}>Уровень 8</span>
					</div>

					<div style={{ flexGrow: '1' }}></div>

					<HeaderButton
						icon={
							<Settings
								color='#bfbfbf'
								width={16}
								height={16}
								strokeWidth={2}
							/>
						}
						text='Настройки'
					/>
				</div>

				<div
					className={styles.line}
					style={{
						width: '100%',
						marginTop: '12px',
					}}
				></div>

				<div className={styles.tabsWrapper}>
					<div className={styles.tab}>
						<span className={`${styles.tabText} ${styles.isActive}`}>
							Тайтлы
						</span>
					</div>
					<div className={styles.tab}>
						<span className={styles.tabText}>Тайтлы</span>
					</div>
					<div className={styles.tab}>
						<span className={styles.tabText}>Тайтлы</span>
					</div>
					<div className={styles.tab}>
						<span className={styles.tabText}>Тайтлы</span>
					</div>
					<div className={styles.tab}>
						<span className={styles.tabText}>Тайтлы</span>
					</div>
				</div>
			</div>

			<div className={styles.profilePageMain}>
				<div className={`${styles.column} ${styles.filter}`}>
					<div className={styles.filterSection}>
						<div className={styles.filterSectionTitleWrapper}>
							<div className={styles.line} style={{ width: '40px' }}></div>
							<button className={styles.filterSectionTitle}>Списки</button>
							<div className={styles.line}></div>
						</div>

						<div className={styles.filterSectionItems}>
							<DropDownItem isSelect={true}>
								<TProfilePageFilterSectionItem title='Все' count='0' />
							</DropDownItem>
							<DropDownItem>
								<TProfilePageFilterSectionItem title='Читаю' count='0' />
							</DropDownItem>
							<DropDownItem>
								<TProfilePageFilterSectionItem title='В планах' count='0' />
							</DropDownItem>
							<DropDownItem>
								<TProfilePageFilterSectionItem title='Брошено' count='0' />
							</DropDownItem>
							<DropDownItem>
								<TProfilePageFilterSectionItem title='Прочитано' count='0' />
							</DropDownItem>
							<DropDownItem>
								<TProfilePageFilterSectionItem title='Любимые' count='0' />
							</DropDownItem>
						</div>
					</div>
					{/*  */}
					<div className={styles.filterSection}>
						<div className={styles.filterSectionTitleWrapper}>
							<div className={styles.line} style={{ width: '40px' }}></div>
							<span className={styles.filterSectionTitle}>Вид</span>
							<div className={styles.line}></div>
						</div>

						<div className={styles.filterSectionItems}>
							<DropDownItem
								icon={
									<List
										color='#bfbfbf'
										width={16}
										height={16}
										strokeWidth={2}
									/>
								}
								text='Список'
								isSelect={true}
							/>
							<DropDownItem
								icon={
									<LayoutGrid
										color='#bfbfbf'
										width={16}
										height={16}
										strokeWidth={2}
									/>
								}
								text='Плитка'
							/>
						</div>
					</div>
					{/*  */}
					<div className={styles.filterSection}>
						<div className={styles.filterSectionTitleWrapper}>
							<div className={styles.line} style={{ width: '40px' }}></div>
							<span className={styles.filterSectionTitle}>Сортировка</span>
							<div className={styles.line}></div>
						</div>

						<div className={styles.filterSectionItems}>
							<DropDownRatioItem text={'По названию (A-Z)'} isSelect={true} />
							<DropDownRatioItem text={'По названию (А-Я)'} />
							<DropDownRatioItem text={'Дате добавления'} />
							<DropDownRatioItem text={'Дате обновления серий'} />
							<DropDownRatioItem text={'Дате просмотра'} />
						</div>

						<div className={styles.line}></div>

						<div className={styles.filterSectionItems}>
							<DropDownRatioItem text={'По убыванию'} isSelect={true} />
							<DropDownRatioItem text={'По возрастанию'} />
						</div>
					</div>
				</div>
				<div className={`${styles.column} ${styles.content}`}>
					<Input
						placeholder='Фильтр по названию'
						type='text'
						padding='12'
						additionalStyles={{ backgroundColor: '#1c1c1c', padding: '12px' }}
					/>

					<div className={styles.cardsWrapper}>
						<ProfileListAnimeCardItem />
						<ProfileListAnimeCardItem />
						<ProfileListAnimeCardItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
