import React, { useState } from 'react';

import TProfilePageFilterSectionItem from '../../templates/TProfilePageFilterSectionItem';
import DropDownItem from '../../ui/DropDownItem/DropDownItem';

import { Pencil } from 'lucide-react';
import useFolders from '../../hooks/useFolders';
import useModal from '../../hooks/useModal';
import FolderEditModal from '../FolderEditModal/FolderEditModal';

const ProfilePageFolderFilter = () => {
	console.warn('[ProfilePageFolderFilter]: Re-Render');
	const { showModal } = useModal();

	const { folders } = useFolders();

	const [selectedFolder, setSelectedFolder] = useState(1);
	return (
		<>
			{folders.map((element, index) => (
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
				onClick={() => showModal(<FolderEditModal />)}
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
