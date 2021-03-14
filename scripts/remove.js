import configBuild from "../configs/build"
import { deleteFolderRecursive } from "../utils/IO"
// Log Delete
// eslint-disable-next-line no-console
console.log("Deleting... !")
// Delete folder build
deleteFolderRecursive(`./${configBuild.folderBuild}`)
// Log Delete
// eslint-disable-next-line no-console
console.log("Delete Done !")
