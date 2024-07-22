import React from 'react';
import styles from './Header.module.css';

import { useNavigate } from 'react-router-dom';
import useModal from '../../hooks/useModal';

import {
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
	Search,
	Settings,
	SquareUser,
	Star,
	User,
	Users,
} from 'lucide-react';

import DropDown from '../../ui/DropDown/DropDown';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import SearchModal from '../SearchModal/SearchModal';

const Header = () => {
	const navigate = useNavigate();
	const { showModal, hideModal } = useModal();

	const isLogin = false;

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
									navigate('/catalog');
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

				<HeaderButton
					onClick={() => {
						showModal(<SearchModal />);
					}}
					icon={
						<Search color='#bfbfbf' width={16} height={16} strokeWidth={3} />
					}
					text='Поиск'
				/>
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

			{isLogin ? (
				<div className={styles.headerLogin}>
					<button className={styles.buttonLogin}>
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

					<HeaderButton
						icon={
							<Bell color='#bfbfbf' width={16} height={16} strokeWidth={3} />
						}
						text={''}
					/>

					<div
						style={{
							width: '32px',
							height: '32px',
							backgroundColor: '#4d4d4d',
							borderRadius: '5px',
						}}
					></div>

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
						leftOffset='-50'
					>
						<div style={{ width: '220px' }}>
							<DropDownItem
								onClick={() => {
									navigate('/profile');
								}}
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
										<span style={{ fontSize: '12px', fontWeight: '400' }}>
											{' '}
											Мой профиль{' '}
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
								text='Выйти'
							/>
						</div>
					</DropDown>
				</div>
			)}
		</div>
	);
};

export default Header;
