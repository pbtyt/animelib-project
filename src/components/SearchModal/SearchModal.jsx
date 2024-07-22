import { Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchModalItem from '../SearchModalItem/SearchModalItem';
import styles from './SearchModal.module.css';

import { animeService } from '../../services/anime.service';
import ModalBase from '../ModalBase/ModalBase';

const SearchModal = () => {
	const [animeTitles, setAnimeTitles] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const contentRef = useRef(null);

	useEffect(() => {
		animeService.searchTitle(searchQuery).then(data => setAnimeTitles(data));
	}, [searchQuery]);

	return (
		<ModalBase contentRef={contentRef}>
			<div className={styles.modalContent} ref={contentRef}>
				<div className={styles.inputWrapper}>
					<Search color='rgba(235, 235, 245, .5)' strokeWidth={2} size={17} />
					<input
						type='text'
						className={styles.input}
						placeholder='Поиск тайтлов'
						// поменять на real-time поиск...
						onKeyDown={event => {
							if (event.key === 'Enter') {
								setSearchQuery(event.target.value);
							}
						}}
					/>
				</div>

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
				<div className={styles.searchResultWrapper}>
					{animeTitles?.length === 0 ? (
						<p className={styles.empty}>
							<span>Расширенный поиск тайтлов находиться в </span>
							<Link to='/catalog'>каталог</Link>
						</p>
					) : (
						animeTitles.map(data => (
							<SearchModalItem data={data} key={data.id} />
						))
					)}
				</div>
			</div>
		</ModalBase>
	);
};

export default SearchModal;
