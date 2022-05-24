import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeProvider from 'src/components/ThemeContext'

import Loading from 'components/Loading'
import LocaleProvider from 'components/LocaleContext'

import 'src/styles/App.scss'

import AppRoutes from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Router>
          <Helmet defaultTitle='LastFM'>
            <title>LastFM</title>
          </Helmet>

          <Suspense fallback={<Loading />}>
            <AppRoutes />
            <Loading />
          </Suspense>
        </Router>
      </LocaleProvider>
    </ThemeProvider>
  )
}

export default App
