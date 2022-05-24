import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Box from 'src/components/Box'
import { useTheme } from 'src/components/ThemeContext/ThemeContext'
import Toggle from 'src/components/Toggle'

import { setSearch } from 'store/global/globalActions'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mode, changeTheme } = useTheme()
  console.log(`LL: Header:React.FC -> changeTheme`, changeTheme)
  console.log(`LL: Header:React.FC -> mode`, mode)

  const handleClick = () => {
    navigate(`/`)
  }

  const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    changeTheme()
  }

  return (
    <Box bg='card' height='80px' maxHeight='80px'>
      <Box
        m='auto'
        px={3}
        py={5}
        maxWidth='1534px'
        display='flex'
        justifyContent='center'
        justifyItems='center'
      >
        <Box
          as='h1'
          width='100%'
          mx={2}
          color='text'
          onClick={handleClick}
          cursor='pointer'
        >
          LastFM
        </Box>
        <Box
          display='flex'
          justifyItems='right'
          height='40px'
          minWidth={['300px', '150px', '300px']}
          placeholder='Search in...'
          justifyContent='flex-end'
          mx={4}
        >
          {/* TODO: search artist */}
          {/* <input
            style={{ padding: '8px' }}
            placeholder='Search in...'
            type='text'
            onChange={handleSearch}
          /> */}
          <Toggle onChange={handleChangeTheme} status={mode !== 'light'} />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
