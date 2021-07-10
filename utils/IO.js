import fs from 'fs'

export const getFileExtension = (filename) => {
  // return filename.split('.').pop();
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined
}

export const deleteFolderRecursive = function (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file) {
      var curPath = path + '/' + file
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}
