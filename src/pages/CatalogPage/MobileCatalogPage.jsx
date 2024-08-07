import React from 'react';
import styles from './MobileCatalogPage.module.css';

import { ArrowDownNarrowWide, ArrowLeft, Settings2 } from 'lucide-react';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Input from '../../ui/Input/Input';

const MobileCatalogPage = () => {
	console.warn('[MobileCatalogPage] Re-Render');
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<ArrowLeft color='#bfbfbf' size={18} strokeWidth={2} />
					<span>Каталог</span>
				</div>

				<div className={styles.headerRight}>
					<button>
						<ArrowDownNarrowWide color='#bfbfbf' size={20} strokeWidth={2} />
						<span>Сортировка</span>
					</button>
					<button>
						<Settings2 color='#bfbfbf' size={20} strokeWidth={2} />
						<span>Фильтр</span>
					</button>
				</div>
			</div>

			<div className={styles.main}>
				<Input placeholder='Поиск по названию' />

				<div className={styles.catalogWrapper}>
					<CatalogCard
						poster_src='./placeholders/mobilepage/poster_placeholder.jpg'
						title='Госпожа Кагуя: в любви как на войне 2'
						type='TV'
						rating='10'
					/>
					<CatalogCard
						poster_src='./placeholders/mobilepage/poster_placeholder.jpg'
						title='Госпожа Кагуя: в любви как на войне 2'
						type='TV'
						rating='10'
					/>
					<CatalogCard
						poster_src='./placeholders/mobilepage/poster_placeholder.jpg'
						title='Госпожа Кагуя: в любви как на войне 2'
						type='TV'
						rating='10'
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileCatalogPage;
