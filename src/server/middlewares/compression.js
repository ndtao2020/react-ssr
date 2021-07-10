export default (req, res, next) => {
  res.setHeader('Content-Encoding', 'gzip')
  next()
}
