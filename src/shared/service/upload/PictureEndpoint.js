import { Upload } from "./Upload"

class PictureEndpoint extends Upload {
  constructor() {
    super("/Picture")
  }
}

export default new PictureEndpoint()
