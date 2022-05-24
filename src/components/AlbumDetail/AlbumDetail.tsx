import React, { useCallback, useRef, useState } from 'react'
import { useMatch } from 'react-router-dom'

import useAlbums from 'src/hooks/useAlbums'

import AlbumCard from 'components/AlbumCard'
import Box from 'components/Box'
import WarningBox from 'components/WarningBox'

const ArtistDetail: React.FC = () => {
  const name = useMatch('/artist/:name')

  const [pageNumber, setPageNumber] = useState(1)

  const { albums, hasMore, loading, error } = useAlbums(
    name?.params?.name,
    pageNumber
  )

  const observer = useRef<IntersectionObserver | null>(null)

  const lastAlbumElementRef = useCallback(
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

  if (!albums?.length) {
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
        Top Albums
      </Box>

      <ul>
        {albums.map((album, index) => {
          if (albums.length === index + 1) {
            return (
              <li ref={lastAlbumElementRef}>
                <AlbumCard key={album.mbid} album={album} />
              </li>
            )
          } else {
            return <AlbumCard key={album.mbid} album={album} />
          }
        })}
      </ul>
    </Box>
  )
}

export default ArtistDetail
