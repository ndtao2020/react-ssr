import { Service } from "../Service"
import { getCSRF } from "../../../../utils/ClientCallApi"
import { PREFIX_UPLOAD_URL, ALLOWS_API_URL } from "../../paths"

class Upload extends Service {
  constructor(path) {
    super(PREFIX_UPLOAD_URL, path)
  }

  async UploadAllows(temp, allowed, file) {
    const data = new FormData()
    data.append("temp", temp)
    data.append("allowed", allowed)
    data.append("file", file)
    const headers = {}
    headers["Accept"] = "application/json"
    headers["CSRF-Token"] = getCSRF()
    return (
      await fetch(`${this.prefix}${ALLOWS_API_URL}/upload${this.path}/upload`, {
        method: "POST",
        credentials: "same-origin",
        headers: headers,
        body: data,
      })
    ).json()
  }
}

export { Upload }
