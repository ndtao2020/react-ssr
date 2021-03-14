const generateRandom = (characters, length) => {
  var result = ""
  var charLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charLength))
  }
  return result
}

/**
 * Sinh chuỗi ngẫu nhiên theo độ dài
 * @param {int} length độ dài của chuỗi cần sinh
 */
export const makeRandomId = (length) =>
  generateRandom(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    length
  )
export const makeRandomSercetId = (length) =>
  generateRandom(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-!@#$%^&*()!",
    length
  )
