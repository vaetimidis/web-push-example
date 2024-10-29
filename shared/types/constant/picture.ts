export interface IPicture {
  src: string
  alt?: string
  srcsets: {
    media?: string
    srcset: string
    type: string
  }[]

  // ~ optional
  width?: string
  height?: string
  loading?: any
  imgClass: string
  pictureClass: string
}
