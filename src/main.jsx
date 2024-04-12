import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.css'

import ProviderWrapper from './providers/ProviderWrapper'
import Router from './components/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderWrapper>
      <Router />
    </ProviderWrapper>
  </React.StrictMode>,
)
