import React from "react"
import PageError from "./PageError"

export default function Page500() {
  return (
    <PageError>
      <h1 className="display-4 mb-10 text-center">500. Lỗi không mong muốn.</h1>
      <p className="mb-30 text-center">Rất xin lỗi về vấn đề này !</p>
    </PageError>
  )
}
