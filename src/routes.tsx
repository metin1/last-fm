import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'
import Footer from 'src/shared/layouts/footer'
import Header from 'src/shared/layouts/header'

import Box from 'components/Box'
import Container from 'components/Container'

import ArtistDetail from './components/ArtistDetail'

const AppRoutes = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/artist/:name' element={<ArtistDetail />} />
          {/* <Route element={<NotFoundPage />} /> */}
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}
export default AppRoutes
