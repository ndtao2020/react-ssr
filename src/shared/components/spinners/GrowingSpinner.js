import React from "react"
import { Spinner } from "react-bootstrap"

const GrowingSpinner = () => {
  return (
    <div>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
    </div>
  )
}

export default GrowingSpinner
