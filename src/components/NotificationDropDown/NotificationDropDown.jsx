import React from 'react';
import styles from './NotificationDropDown.module.css';

import { Link } from 'react-router-dom';

import DropDown from '../../ui/DropDown/DropDown';

import { Bell, CheckCheck } from 'lucide-react';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import NotificationDropDownItem from './NotificationDropDownItem';

const NotificationDropDown = ({
	notificationCount = 0,
	setNotificationCount,
}) => {
	return (
		<DropDown
			button={
				<HeaderButton
					icon={<Bell color='#bfbfbf' width={16} height={16} strokeWidth={3} />}
					text={''}
				/>
			}
			minMenuWidth='440px'
			menuAdditionalStyles={{ padding: '.7rem', paddingBottom: '0' }}
			leftOffset='-250'
			topOffset='45'
		>
			<div className={styles.dropDownWrapper}>
				<div className={styles.dropDownHeader}>
					<HeaderButton
						icon={
							<Bell color='#bfbfbf' width={16} height={16} strokeWidth={3} />
						}
						text={''}
						additionalStyles={{ padding: '.5rem' }}
					/>
					<span className={styles.dropDownTitle}>Уведомления</span>
					<HeaderButton
						icon={
							<CheckCheck
								color='#bfbfbf'
								width={16}
								height={16}
								strokeWidth={2}
							/>
						}
						text={''}
						onClick={() => setNotificationCount(0)}
						additionalStyles={{ padding: '.5rem' }}
					/>
				</div>
				<div className={styles.dropDownMain}>
					{notificationCount !== 0 ? (
						[...new Array(notificationCount)].map((_, index) => (
							<NotificationDropDownItem key={index} />
						))
					) : (
						<div
							style={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#8f8f94',
							}}
						>
							Нет новых уведомлений
						</div>
					)}
				</div>
				<Link className={styles.dropDownFooter}>Показать все уведомления</Link>
			</div>
		</DropDown>
	);
};

export default NotificationDropDown;
