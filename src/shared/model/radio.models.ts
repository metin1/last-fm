export interface IImage {
  '#text': string
  size: string
}

export interface IAlbumArtist {
  name: string
  mbid: string
  url: string
}

export interface Attr {
  rank: string
}

export interface IArtist {
  name: string
  playcount: string
  listeners: string
  mbid: string
  url: string
  streamable: string
  image: IImage[]
}

export interface IAlbum {
  name: string
  playcount: number
  mbid: string
  url: string
  artist: IAlbumArtist
  image: IImage[]
}

export interface ITrack {
  name: string
  playcount: string
  listeners: string
  url: string
  streamable: string
  artist: IAlbumArtist
  image: IImage[]
  '@attr': Attr
}
