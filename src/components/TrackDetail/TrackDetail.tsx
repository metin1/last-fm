import React, { useCallback, useRef, useState } from 'react'
import { useMatch } from 'react-router-dom'

import useTracks from 'src/hooks/useTracks'

import Box from 'components/Box'
import TrackCard from 'components/TrackCard'
import WarningBox from 'components/WarningBox'

const TrackDetail: React.FC = () => {
  const name = useMatch('/artist/:name')

  const [pageNumber, setPageNumber] = useState(1)

  const { tracks, hasMore, loading, error } = useTracks(
    name?.params?.name,
    pageNumber
  )

  const observer = useRef<IntersectionObserver | null>(null)

  const lastTrackElementRef = useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  if (error) {
    return <WarningBox>{error}</WarningBox>
  }

  if (!tracks?.length) {
    return <WarningBox>There is no radio to show</WarningBox>
  }
  return (
    <Box
      display='flex'
      justifyItems='center'
      alignItems='center'
      justifyContent='space-around'
      m={3}
      p={1}
      flexDirection='column'
      color='heading'
      flexWrap='nowrap'
    >
      <Box as='h1' py={4}>
        Top Tracks
      </Box>

      <ul>
        {tracks.map((track, index) => {
          if (tracks.length === index + 1) {
            return (
              <li ref={lastTrackElementRef}>
                <TrackCard key={track.name} track={track} />
              </li>
            )
          } else {
            return <TrackCard key={track.name} track={track} />
          }
        })}
      </ul>
    </Box>
  )
}

export default TrackDetail
