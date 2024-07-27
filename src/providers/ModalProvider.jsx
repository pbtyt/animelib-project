import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeModal, setActiveModal] = useState(<></>);
	const [activeModals, setActiveModals] = useState([]);
	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				setIsModalOpen,
				activeModal,
				setActiveModal,
				activeModals,
				setActiveModals,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
