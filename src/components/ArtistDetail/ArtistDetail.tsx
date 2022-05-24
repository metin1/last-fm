import React from 'react'
import { useMatch } from 'react-router-dom'

import AlbumDetail from 'components/AlbumDetail'
import Box from 'components/Box'
import TrackDetail from 'components/TrackDetail'

const ArtistDetail: React.FC = () => {
  const name = useMatch('/artist/:name')

  return (
    <Box>
      <Box
        m='auto'
        my={4}
        p={[1, 2, 3]}
        width={['360px', '560px', '820px']}
        borderColor='border'
        borderStyle='solid'
        borderWidth='1px'
        textAlign='center'
        bg='detail'
        fontSize={[4, 5, 6]}
      >
        {name?.params?.name}
      </Box>
      <Box
        m='auto'
        my={4}
        p={[1, 2, 3]}
        display='flex'
        flexDirection='row'
        width={['360px', '560px', '820px']}
        borderColor='border'
        borderStyle='solid'
        borderWidth='1px'
        alignItems='flex-start'
        bg='card'
      >
        <AlbumDetail />
        <TrackDetail />
      </Box>
    </Box>
  )
}

export default ArtistDetail
