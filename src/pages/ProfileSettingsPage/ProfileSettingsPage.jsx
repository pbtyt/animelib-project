import { Bell, Lock, Palette, User } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';
import Input from '../../ui/Input/Input';
import styles from './ProfileSettingsPage.module.css';

const ProfileSettingsPage = () => {
	const { user_id } = useParams();
	console.log(user_id);
	return (
		<div className={styles.container}>
			<div className={styles.tabs}>
				<DropDownItem
					additionalStyles={{ fontSize: '15px' }}
					text='Информация'
					icon={<User fill='#bfbfbf' width={16} height={16} strokeWidth={1} />}
				/>
				<DropDownItem
					additionalStyles={{ fontSize: '15px' }}
					text='Уведомления'
					icon={<Bell fill='#bfbfbf' width={16} height={16} strokeWidth={1} />}
				/>
				<DropDownItem
					additionalStyles={{ fontSize: '15px' }}
					text='Безопасность'
					icon={<Lock color='#bfbfbf' width={16} height={16} strokeWidth={2} />}
				/>
				<DropDownItem
					additionalStyles={{ fontSize: '15px' }}
					text='Персонализация'
					icon={
						<Palette color='#bfbfbf' width={16} height={16} strokeWidth={2} />
					}
				/>
			</div>

			<div className={styles.settingsPageMain}>
				<div className={styles.sectionsWrapper}>
					<div className={styles.section}>
						<span>Никнейм</span>
						<Input icon={<></>} placeholder='Никнейм...' oInputValue='blad3' />
					</div>
				</div>

				<Button
					styleIndex={0}
					additionalStyles={{
						backgroundColor: 'transparent',
						alignSelf: 'start',
					}}
				>
					<span>Сохранить</span>
				</Button>
			</div>
		</div>
	);
};

export default ProfileSettingsPage;
