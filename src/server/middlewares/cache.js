export const noCache = (req, res, next) => {
  res.header('Cache-Control', 'private,no-cache,no-store,must-revalidate,max-age=0')
  res.header('Pragma', 'no-cache')
  next()
}

export const setTimePrivate = (res, next, time) => {
  res.header('Cache-Control', `private,max-age=${time}`)
  next()
}

export const setTimePublic = (res, next, time) => {
  res.header('Cache-Control', `public,max-age=${time}`)
  next()
}

export const setImmutable = (res, next, time) => {
  res.header('Cache-Control', `public,max-age=${time},immutable`)
  next()
}

export const reValidation = (res, next) => {
  res.header('Cache-Control', `no-cache,max-age=0`)
  next()
}
