import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import ArtistCard from 'src/components/ArtistCard/ArtistCard'
import WarningBox from 'src/components/WarningBox'
import useArtistSearch from 'src/hooks/useArtistSearch'
import { searchSelector } from 'src/store/selectors'

import Box from 'components/Box'

const HomePage: React.FC = () => {
  const searchQuery = useSelector(searchSelector)
  const [pageNumber, setPageNumber] = useState(1)

  const { artists, hasMore, loading, error } = useArtistSearch(
    searchQuery,
    pageNumber
  )

  const observer = useRef<IntersectionObserver | null>(null)

  const lastArtistElementRef = useCallback(
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

  if (!artists?.length) {
    return <WarningBox>There is no radio to show</WarningBox>
  }

  return (
    <Box
      display='flex'
      justifyItems='center'
      alignItems='center'
      justifyContent='space-around'
      m={3}
      p={2}
      flexDirection='column'
      color='heading'
      flexWrap='nowrap'
    >
      <Box as='h1' py={4}>
        Top Artist List
      </Box>

      <ul>
        {artists.map((artist, index) => {
          if (artists.length === index + 1) {
            return (
              <li ref={lastArtistElementRef}>
                <ArtistCard key={artist.mbid} artist={artist} />
              </li>
            )
          } else {
            return <ArtistCard key={artist.mbid} artist={artist} />
          }
        })}
      </ul>
    </Box>
  )
}

export default HomePage
