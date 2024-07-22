import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

import AnimePage from '../pages/AnimePage/AnimePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='catalog' element={<CatalogPage />} />
					<Route path='profile' element={<ProfilePage />} />
					<Route path='anime/:id' element={<AnimePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
