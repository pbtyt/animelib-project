import React from 'react';

import FolderProvider from './FolderProvider';
import ModalProvider from './ModalProvider';

const ProviderWrapper = ({ children }) => {
	return (
		<FolderProvider>
			<ModalProvider>{children}</ModalProvider>
		</FolderProvider>
	);
};

export default ProviderWrapper;
