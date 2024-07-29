import { Bookmark, Layers } from 'lucide-react';
import React from 'react';
import styles from './NavigationComponent.module.css';

const NavigationComponent = () => {
	console.warn('[NavigationComponent] Re-Render');
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
				<button
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
				>
					<Layers color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Закладки</span>
				</button>
				<button
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
				>
					<Layers color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Закладки</span>
				</button>

				<button
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
				>
					<Bookmark color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Закладки</span>
				</button>
				<button
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
				>
					<Layers color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Закладки</span>
				</button>
				<button
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						// flexGrow: '1',
					}}
				>
					<Layers color='#bfbfbf' size={18} strokeWidth={2} />
					<span style={{ fontSize: '11px', fontWeight: '600' }}>Закладки</span>
				</button>
			</div>
		</div>
	);
};

export default NavigationComponent;
