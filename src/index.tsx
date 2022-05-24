import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import axios from 'axios'

import ErrorBoundary from 'src/shared/error/errorBoundary'

import store from 'store/index'

import 'src/locales/i18n'
import App from './App'

axios.defaults.baseURL = process.env.API_SERVER_URL
console.log(`LL: process.env.API_SERVER_URL`, process.env.API_SERVER_URL)

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
)
