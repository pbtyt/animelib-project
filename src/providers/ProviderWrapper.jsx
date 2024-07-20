import React from 'react';

import ModalProvider from './ModalProvider';

const ProviderWrapper = ({ children }) => {
	return <ModalProvider>{children}</ModalProvider>;
};

export default ProviderWrapper;
