import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const FolderContext = createContext();

const FolderProvider = ({ children }) => {
	const { storedValue } = useLocalStorage('folder', [
		{ id: 1, name: 'Читаю', color: '#ff9b40', count: 0 },
		{ id: 2, name: 'В планах', color: '#2196f3', count: 0 },
		{ id: 3, name: 'Брошено', color: '#f3382a', count: 0 },
		{ id: 4, name: 'Прочитано', color: '#3cce7b', count: 0 },
		{ id: 5, name: 'Любимые', color: '#ff6666', count: 0 },
	]);
	const [folders, setFolders] = useState(storedValue);
	return (
		<FolderContext.Provider value={{ folders, setFolders }}>
			{children}
		</FolderContext.Provider>
	);
};

export default FolderProvider;
