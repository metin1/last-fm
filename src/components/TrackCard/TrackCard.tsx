import React from 'react'

import { ITrack } from 'src/shared/model/radio.models'

import Box from 'components/Box'
import Span from 'components/Span'

export interface TrackProps {
  track: ITrack
}

const TrackCard = (props: TrackProps) => {
  return (
    <Box
      m='auto'
      my={4}
      p={3}
      display='flex'
      flexDirection='row'
      width={['150px', '250px', '370px']}
      borderColor='border'
      borderStyle='solid'
      borderWidth='1px'
      flex='auto 1 1'
      bg='detail'
    >
      <Box display='flex' alignItems='center' height='auto'>
        <Box width={['40px', '50px', '70px']} height={['40px', '50px', '70px']}>
          {props.track?.image?.[0]?.['#text'] && (
            <img
              width='100%'
              height='100%'
              src={props.track?.image?.[0]?.['#text']}
              alt={props.track?.name}
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
          p={[1, 2, 3]}
          width={['55px', '100px', '130px']}
        >
          <Box>Track</Box>
          <hr />

          <Box>{props?.track?.name}</Box>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          flexDirection='column'
          width={['55px', '100px', '130px']}
        >
          <Box p={[1, 2, 3]}>
            <Span>{props?.track?.playcount}</Span>
            <Span ml={1}>Plays</Span>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TrackCard
