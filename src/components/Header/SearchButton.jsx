import React from 'react';

import useModal from '../../hooks/useModal';
import HeaderButton from '../../ui/HeaderButton/HeaderButton';
import SearchModal from '../SearchModal/SearchModal';

import { Search } from 'lucide-react';

const SearchButton = () => {
	const { showModal } = useModal();
	return (
		<HeaderButton
			onClick={() => {
				showModal(<SearchModal />);
			}}
			icon={<Search color='#bfbfbf' width={16} height={16} strokeWidth={3} />}
			text='Поиск'
		/>
	);
};

export default React.memo(SearchButton);
