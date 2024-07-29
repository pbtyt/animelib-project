import React, { useState } from 'react';
import Input from '../../../../ui/Input/Input';
import styles from './SearchHeader.module.css';

import useModal from '../../../../hooks/useModal';
import SearchModal from '../../../SearchModal/SearchModal';

const SearchHeader = () => {
	console.warn('[SearchHeader] Re-Render');

	const { showModal } = useModal();

	const [inputValue, setInputValue] = useState('');
	return (
		<div
			className={styles.searchHeaderWrapper}
			onClick={() => showModal(<SearchModal isMobileView />)}
		>
			<Input
				placeholder='Быстрый поиск'
				additionalStyles={{ background: '#7474801a', border: 'none' }}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
		</div>
	);
};

export default SearchHeader;
