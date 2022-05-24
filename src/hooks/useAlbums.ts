import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'

import { IAlbum } from 'src/shared/model/radio.models'

export default function useAlbums(artistName: string, pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [albums, setAlbums] = useState<IAlbum[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setAlbums([])
  }, [artistName])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel: Canceler
    axios({
      method: 'GET',
      url: `/?method=artist.getTopAlbums&artist=${artistName}&api_key=${process.env.API_KEY}&page=${pageNumber}&limit=10&format=json`,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setAlbums(prevAlbums => {
          return [...new Set([...prevAlbums, ...res.data.topalbums.album])]
        })
        setHasMore(res.data.topalbums.album.length > 0)
        setLoading(false)
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [artistName, pageNumber])

  return { loading, error, albums, hasMore }
}
