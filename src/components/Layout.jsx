import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

import { ModalContext } from '../providers/ModalProvider';

const Layout = () => {
	const { activeModal, activeModals } = useContext(ModalContext);
	return (
		<>
			<Header />
			<Outlet />
			{/* {activeModal} */}
			{activeModals.map((modal, index) => (
				<div key={index}>{modal}</div>
			))}
		</>
	);
};

export default Layout;
