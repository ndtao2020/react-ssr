export default (req, res, next) => {
  res.type('text/html;charset=utf-8')
  next()
}
