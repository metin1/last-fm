import React, { forwardRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { IArtist } from 'src/shared/model/radio.models'

import Box from 'components/Box'
import { Link } from 'components/Link'
import Span from 'components/Span'

export interface ArtistDetailProps {
  artist: IArtist
}

const ArtistCard = (props: ArtistDetailProps) => {
  const dispatch = useDispatch()

  return (
    <Box
      m='auto'
      my={4}
      p={3}
      display='flex'
      flexDirection='row'
      width={['320px', '520px', '780px']}
      borderColor='border'
      borderStyle='solid'
      borderWidth='1px'
      flex='auto 1 1'
      bg='card'
    >
      <Box display='flex' alignItems='center' height='auto'>
        <Box
          width={['70px', '100px', '150px']}
          height={['70px', '100px', '150px']}
        >
          {props.artist?.image?.[0]?.['#text'] && (
            <img
              width='100%'
              height='100%'
              src={props.artist?.image?.[0]?.['#text']}
              alt={props.artist?.name}
            />
          )}
        </Box>
      </Box>
      <Box display='flex' flexDirection='row' flexWrap='wrap'>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          my={3}
          p={2}
          pl={[2, 4, 6]}
          width={['115px', '200px', '300px']}
        >
          <Box>Artist</Box>
          <hr />

          <Link href={`/artist/${props?.artist?.name}`}>
            <Box as='h2'>{props?.artist?.name}</Box>
          </Link>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          width={['115px', '200px', '300px']}
        >
          <Box p={[1, 2, 3]}>
            <Span>Listeners:</Span>
            <Span>{props?.artist?.listeners}</Span>
          </Box>
          <Box p={[1, 2, 3]}>
            <Span>Playcount:</Span>
            <Span>{props?.artist?.playcount}</Span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ArtistCard
