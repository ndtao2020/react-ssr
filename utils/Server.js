/**
 * Parse Host
 */
export function parseHost(req) {
  return `${req.protocol}://${req.subomains ? `${req.subomains.join('.')}.` : ''}${req.hostname}`
}
/**
 * Normalize a port into a number, string, or false.
 */
export function normalizePort(val) {
  var port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}
/**
 * Event listener for HTTP server "error" event.
 */
export function onError(error, port) {
  if (error.syscall !== 'listen') throw error
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`Pipe ${port} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`Port ${port} is already in use `)
      process.exit(1)
      break
    default:
      throw error
  }
}
