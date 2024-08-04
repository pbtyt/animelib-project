import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

import useCheckMobileScreen from '../hooks/useCheckMobileScreen';
import AnimePage from '../pages/AnimePage/AnimePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import HomePage from '../pages/HomePage/HomePage';
import MobileBookmarkPage from '../pages/MobileBookmarkPage/MobileBookmarkPage';
import MobileProfilePage from '../pages/ProfilePage/MobileProfilePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ProfileSettingsPage from '../pages/ProfileSettingsPage/ProfileSettingsPage';

const Router = () => {
	const isMobile = useCheckMobileScreen();
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/animelib-project/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='catalog' element={<CatalogPage />} />

					<Route
						path='profile'
						element={!isMobile ? <ProfilePage /> : <MobileProfilePage />}
					/>
					<Route path='profile/bookmarks' element={<MobileBookmarkPage />} />
					<Route
						path='profile/:user_id/settings'
						element={<ProfileSettingsPage />}
					/>

					<Route path='anime/:id' element={<AnimePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
