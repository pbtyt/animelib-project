import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.css';

import Router from './components/Router';
import ProviderWrapper from './providers/ProviderWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<ProviderWrapper>
		<Router />
	</ProviderWrapper>
	// </React.StrictMode>
);
