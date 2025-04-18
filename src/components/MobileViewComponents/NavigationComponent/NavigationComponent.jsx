import { Bell, Bookmark, Fan, Layers, Menu } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationComponent.module.css';

import useModal from '../../../hooks/useModal';
import MenuModal from '../MenuModal/MenuModal';

const NavigationComponent = () => {
	console.warn('[NavigationComponent] Re-Render');
	const { showModal } = useModal();
	return (
		<div className={styles.navWrapper}>
			<div
				style={{
					padding: '0 1rem',
					display: 'grid',
					gridTemplateColumns: 'repeat(5,1fr)',
					gap: '1rem',
					height: '100%',
				}}
			>
				<Link
					style={{
						color: '#bfbfbf',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
					to='./profile/bookmarks'
				>
					<Bookmark color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Закладки</span>
				</Link>
				<Link
					style={{
						color: '#bfbfbf',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
					to='./catalog'
				>
					<Layers color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Каталог</span>
				</Link>

				<Link
					style={{
						color: '#bfbfbf',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
					to={'/animelib-project/'}
				>
					<Fan color='#bfbfbf' size={32} strokeWidth={2} />
				</Link>

				<Link
					style={{
						color: '#bfbfbf',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
				>
					<Bell color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>
						Уведомления
					</span>
				</Link>
				<button
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
					onClick={() => showModal(<MenuModal />)}
				>
					<Menu color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Меню</span>
				</button>
			</div>
		</div>
	);
};

export default NavigationComponent;
