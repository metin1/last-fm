import axios from 'axios'

class RadioService {
  private apiUrl: string

  constructor() {
    this.apiUrl = 'api/auth'
  }

  getTopArtist(page: number) {
    return axios.get(
      `/?method=chart.gettopartists&api_key=${process.env.API_KEY}&page=${page}&limit=5&format=json`
    )
  }

  getTopAlbums(artistName: string, page: number) {
    return axios.get(
      `/?method=chart.getTopAlbums&artist=${artistName}&page=${page}&limit=10&api_key=${process.env.API_KEY}&format=json`
    )
  }

  getTopTracks(artistName: string) {
    return axios.get(
      `/?method=chart.getTopTracks&artist=${artistName}&api_key=${process.env.API_KEY}&format=json`
    )
  }
}

export default RadioService
