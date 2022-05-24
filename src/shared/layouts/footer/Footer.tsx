import React from 'react'

import Box from 'components/Box'

const Footer: React.FC = () => {
  return (
    <Box
      m='auto'
      p={3}
      bg='lightgrey'
      width='100%'
      height='48px'
      maxHeight='48px'
      textAlign='center'
    >
      LastFM © This is LastFM page design by Metin
    </Box>
  )
}

export default Footer
