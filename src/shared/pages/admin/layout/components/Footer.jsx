import React from "react"
import { Col } from "react-bootstrap"

export default function DefaultFooter() {
  return (
    <div className="footer">
      <Col lg={{ size: 3 }}>
        <b>123</b>
      </Col>
      <Col lg={{ size: 3 }}>
        <i className="fas fa-caret-right" />
        Copyright &copy; {new Date().getFullYear()}
      </Col>
      <Col lg={{ size: 3, offset: 1 }}>
        <i className="fas fa-envelope" />
        123@gmail.com
      </Col>
    </div>
  )
}
