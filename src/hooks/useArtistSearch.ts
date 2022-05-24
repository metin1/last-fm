import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'

import { IArtist } from 'src/shared/model/radio.models'

export default function useArtistSearch(query: any, pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [artists, setArtists] = useState<IArtist[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setArtists([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel: Canceler
    axios({
      method: 'GET',
      url: `/?method=chart.gettopartists&api_key=${process.env.API_KEY}&page=${pageNumber}&limit=5&format=json`,
      params: { q: query },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setArtists(prevArtists => {
          return [...new Set([...prevArtists, ...res.data.artists.artist])]
        })
        setHasMore(res.data.artists.artist.length > 0)
        setLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, artists, hasMore }
}
