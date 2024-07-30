import React, { useState } from 'react';
import styles from './Header.module.css';

import { useNavigate } from 'react-router-dom';

import {
	ArrowRight,
	Bell,
	BookHeart,
	CircleUserRound,
	Compass,
	Ellipsis,
	Flame,
	GalleryVerticalEnd,
	History,
	Landmark,
	Layers,
	LogIn,
	LogOut,
	Menu,
	MessageCircleIcon,
	MessageSquareText,
	MessagesSquare,
	Plus,
	Settings,
	SquareUser,
	Star,
	User,
	Users,
} from 'lucide-react';

import DropDown from '../../ui/DropDown/DropDown';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import NotificationDropDown from '../NotificationDropDown/NotificationDropDown';
import SearchButton from './SearchButton';

const Header = () => {
	const navigate = useNavigate();

	//NOTE: ONLY FOR TEST
	const [isLogin, setIsLogin] = useState(false);
	const [notificationCount, setNotificationCount] = useState(2);
	console.warn('[Header] Re-Render');
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.logoWrapper}></div>
			<div className={styles.headerButtons}>
				<DropDown
					button={
						<HeaderButton
							icon={
								<Layers
									color='#bfbfbf'
									width={16}
									height={16}
									strokeWidth={3}
								/>
							}
							text={'Каталог'}
						/>
					}
					topOffset='47'
				>
					<div className={styles.grid}>
						<div className={styles.col} style={{ paddingRight: '.65rem' }}>
							<DropDownItem
								icon={
									<Layers
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Тайтлы'
								isSelect={true}
								onClick={() => {
									navigate('./catalog');
								}}
							/>
							<DropDownItem
								icon={
									<Flame
										width={14}
										height={14}
										color='#bfbfbf'
										strokeWidth={3}
									/>
								}
								text='Сейчас смотрят'
							/>
							<DropDownItem
								icon={
									<Star
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Коллекции'
							/>
							<DropDownItem
								icon={
									<Compass
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Отзывы и Рецензии'
							/>
							<DropDownItem
								icon={
									<Users
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Команды'
							/>
							<DropDownItem
								icon={
									<User
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Люди'
							/>
							<DropDownItem
								icon={
									<SquareUser
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Персонажи'
							/>
							<DropDownItem
								icon={
									<GalleryVerticalEnd
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Франшизы'
							/>
							<DropDownItem
								icon={
									<Landmark
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Издательства'
							/>
							<DropDownItem
								icon={
									<CircleUserRound
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Пользователи'
							/>
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

				<SearchButton />
				<HeaderButton
					icon={
						<MessagesSquare
							color='#bfbfbf'
							width={16}
							height={16}
							strokeWidth={3}
						/>
					}
					text='Форум'
				/>
				<HeaderButton
					icon={
						<Ellipsis color='#bfbfbf' width={16} height={16} strokeWidth={3} />
					}
					text=''
				/>
			</div>

			{!isLogin ? (
				<div className={styles.headerLogin}>
					<button
						className={styles.buttonLogin}
						onClick={() => setIsLogin(true)}
					>
						<LogIn color='#fff' width={16} height={16} strokeWidth={4} />
						<span>Вход | Регистрация</span>
					</button>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '.5rem',
					}}
				>
					<HeaderButton
						icon={
							<Plus color='#bfbfbf' width={16} height={16} strokeWidth={3} />
						}
						text={''}
					/>

					<div style={{ position: 'relative' }}>
						<NotificationDropDown
							notificationCount={notificationCount}
							setNotificationCount={setNotificationCount}
						/>
						{notificationCount > 0 && (
							<div className={styles.notificationCount}>
								{notificationCount}
							</div>
						)}
					</div>

					<div
						style={{
							cursor: 'pointer',
							width: '38px',
							height: '38px',
							backgroundColor: '#4d4d4d',
							borderRadius: '5px',
						}}
						onClick={() => navigate('./profile')}
					>
						<img
							src='../avatar.jpg'
							alt='avatar'
							style={{
								borderRadius: '5px',
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								objectPosition: 'center',
							}}
						/>
					</div>

					<DropDown
						button={
							<HeaderButton
								icon={
									<Menu
										color='#bfbfbf'
										width={16}
										height={16}
										strokeWidth={3}
									/>
								}
								text={''}
							/>
						}
						topOffset='50'
						leftOffset='-180'
					>
						<div style={{ width: '220px' }}>
							<DropDownItem
								onClick={() => {
									navigate('./profile');
								}}
								isSelect={true}
							>
								<div
									style={{
										display: 'flex',
										gap: '.5rem',
										alignItems: 'center',
									}}
								>
									<User
										color='#bfbfbf'
										width={16}
										height={16}
										strokeWidth={3}
									/>

									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'start',
										}}
									>
										<span style={{ fontWeight: '600' }}>blad3</span>
										<span
											style={{
												fontSize: '12px',
												fontWeight: '400',
												color: '#ebebf580',
												display: 'flex',
												alignItems: 'center',
												gap: '.2rem',
											}}
										>
											Мой профиль
											<ArrowRight
												color='#ebebf580'
												width={16}
												height={14}
												strokeWidth={2}
											/>
										</span>
									</div>
								</div>
							</DropDownItem>

							<div
								style={{
									backgroundColor: '#545458a6',
									height: '1px',
									width: '100%',
									marginBottom: '.2rem',
								}}
							></div>

							<DropDownItem
								icon={
									<Bell
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Уведомления'
							/>

							<DropDownItem
								icon={
									<MessageCircleIcon
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Комментарии'
							/>
							<DropDownItem
								icon={
									<MessageSquareText
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Личные сообщения'
							/>
							<DropDownItem
								icon={
									<History
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='История просмотров'
							/>
							<DropDownItem
								icon={
									<BookHeart
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Избранное'
							/>
							<div
								style={{
									backgroundColor: '#545458a6',
									height: '1px',
									width: '100%',
									marginBottom: '.2rem',
								}}
							></div>
							<DropDownItem
								icon={
									<Settings
										color='#bfbfbf'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								text='Настройки'
							/>
							<DropDownItem
								icon={
									<LogOut
										color='#DE7072'
										width={14}
										height={14}
										strokeWidth={3}
									/>
								}
								additionalStyles={{ color: '#de7072' }}
								text='Выйти'
								onClick={() => setIsLogin(false)}
							/>
						</div>
					</DropDown>
				</div>
			)}
		</div>
	);
};

export default React.memo(Header);
