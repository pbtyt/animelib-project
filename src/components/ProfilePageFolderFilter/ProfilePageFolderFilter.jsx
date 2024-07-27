import React, { useState } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';

import TProfilePageFilterSectionItem from '../../templates/TProfilePageFilterSectionItem';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';

import { Pencil } from 'lucide-react';
import useModal from '../../hooks/useModal';
import FolderCustomizationModal from '../FolderCustomizationModal/FolderCustomizationModal';

const ProfilePageFolderFilter = () => {
	console.warn('[ProfilePageFolderFilter]: Re-Render');
	const { showModal } = useModal();

	//NOTE: Only For TEST
	const { setValue, storedValue } = useLocalStorage('folder', {});
	const [selectedFolder, setSelectedFolder] = useState(1);
	return (
		<>
			{storedValue['UserFolders'].map((element, index) => (
				<DropDownItem
					key={element.id}
					isSelect={selectedFolder === element.id}
					onClick={() => setSelectedFolder(element.id)}
				>
					<TProfilePageFilterSectionItem
						title={element.name}
						count={element.count}
					/>
				</DropDownItem>
			))}
			<DropDownItem
				additionalStyles={{ display: 'flex' }}
				onClick={() => showModal(<FolderCustomizationModal />)}
			>
				<button
					style={{
						flexGrow: '1',
						textAlign: 'left',
						color: '#ebebf580',
					}}
				>
					Редактировать...
				</button>
				<Pencil color='#ebebf580' width={16} height={16} strokeWidth={2} />
			</DropDownItem>
		</>
	);
};

export default React.memo(ProfilePageFolderFilter);
