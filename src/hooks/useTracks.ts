import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'

import { ITrack } from 'src/shared/model/radio.models'

export default function useTracks(artistName: string, pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [tracks, setTracks] = useState<ITrack[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setTracks([])
  }, [artistName])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel: Canceler
    axios({
      method: 'GET',
      url: `/?method=artist.getTopTracks&artist=${artistName}&api_key=${process.env.API_KEY}&page=${pageNumber}&limit=10&format=json`,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setTracks(prevTracks => {
          return [...new Set([...prevTracks, ...res.data.toptracks.track])]
        })
        setHasMore(res.data.toptracks.track.length > 0)
        setLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [artistName, pageNumber])

  return { loading, error, tracks, hasMore }
}
