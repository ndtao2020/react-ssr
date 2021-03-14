/**
 *
 * @param {*} err
 * @param {*} stats
 */
// eslint-disable-next-line no-console
export const logErrorWebpack = (err, stats) =>
  stats.hasErrors() && err && console.log(err)

/**
 *
 * @param {*} stats
 */
// eslint-disable-next-line no-console
export const logDoneWebpack = (stats) =>
  console.log(stats.toString({ colors: true }))

/**
 *
 * @param {*} err
 * @param {*} stats
 * @param {*} callback
 */
export const endWebpack = (err, stats, callback) => {
  logErrorWebpack(err, stats)
  logDoneWebpack(stats)
  callback && callback()
}
