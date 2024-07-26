import React from 'react';

import { Link } from 'react-router-dom';

const NotificationDropDownItem = () => {
	return (
		<div
			style={{
				marginTop: '.5rem',
				display: 'flex',
				gap: '.8rem',
				alignItems: 'center',
			}}
		>
			<img
				src='./posters/jujutsu-kaisen.jpg'
				alt='poster'
				width={50}
				height={70}
				style={{ borderRadius: '6px' }}
			/>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<span
					style={{
						fontSize: '13px',
						fontWeight: '700',
					}}
				>
					AnilibriaTV{' '}
					<span
						style={{
							marginLeft: '.35rem',
							fontSize: '12px',
							fontWeight: '400',
							color: '#ebebf580',
						}}
					>
						11 часов назад
					</span>
				</span>
				<span style={{ fontSize: '14px', lineHeight: '20px' }}>
					Добавлена новая Серия 24
				</span>
				<span style={{ fontSize: '14px', lineHeight: '20px' }}>
					В тайтле{' '}
					<Link
						to={'./'}
						style={{
							fontWeight: '500',
							color: '#bfbfbf',
							borderBottom: '1px solid #bfbfbf26',
						}}
					>
						Магическая Битва
					</Link>
				</span>
			</div>
		</div>
	);
};

export default NotificationDropDownItem;
