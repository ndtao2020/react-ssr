import colors from "colors/safe"
import configBuild from "../configs/build"
import { deleteFolderRecursive } from "../utils/IO"
// Log Delete
// eslint-disable-next-line no-console
console.log(colors.magenta("Deleting... !"))
// Delete folder build
deleteFolderRecursive(`./${configBuild.folderBuild}`)
// Log Delete
// eslint-disable-next-line no-console
console.log(colors.magenta("Delete Done !"))
