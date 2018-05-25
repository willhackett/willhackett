
export default (path: string, cb: () => void) => {
  const image = new Image()

  image.onload = cb
  image.src = path
}
