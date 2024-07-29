import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

import useCheckMobileScreen from '../hooks/useCheckMobileScreen';
import { ModalContext } from '../providers/ModalProvider';
import NavigationComponent from './MobileViewComponents/NavigationComponent/NavigationComponent';

const Layout = () => {
	const { activeModal, activeModals } = useContext(ModalContext);
	const isMobile = useCheckMobileScreen();
	return (
		<>
			{!isMobile && <Header />}
			<Outlet />
			{isMobile && <NavigationComponent />}
			{activeModals.map((modal, index) => (
				<div key={index}>{modal}</div>
			))}
		</>
	);
};

export default Layout;
