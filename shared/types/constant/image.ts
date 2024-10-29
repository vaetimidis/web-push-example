export interface IImage {
  src: string
  alt?: string
  srcsets?: {
    media?: string
    srcset: string
    type: string
  }[]

  // ~ optional
  height?: number | string
  width?: number | string
  loading?: any
}
