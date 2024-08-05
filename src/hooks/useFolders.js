import useLocalStorage from './useLocalStorage';

import { useContext } from 'react';
import { FolderContext } from '../providers/FolderProvider';

const useFolders = () => {
	const { folders, setFolders } = useContext(FolderContext);
	const { setValue, storedValue } = useLocalStorage('folder', [
		{ id: 1, name: 'Читаю', color: '#ff9b40', count: 0 },
		{ id: 2, name: 'В планах', color: '#2196f3', count: 0 },
		{ id: 3, name: 'Брошено', color: '#f3382a', count: 0 },
		{ id: 4, name: 'Прочитано', color: '#3cce7b', count: 0 },
		{ id: 5, name: 'Любимые', color: '#ff6666', count: 0 },
	]);

	const addNewFolder = folderName => {
		const lastUsedID = storedValue.at(-1).id;
		const newFolderData = {
			id: lastUsedID + 1,
			name: folderName,
			color: '744cb5',
			count: 0,
			userCreated: true,
		};

		setValue([...storedValue, newFolderData]);
		setFolders([...folders, newFolderData]);
	};

	const removeFolder = folderID => {
		setValue(storedValue.filter(folder => folder.id !== folderID));
		setFolders(folders.filter(folder => folder.id !== folderID));
	};

	return { folders, addNewFolder, removeFolder };
};
export default useFolders;
