import React from "react"
import { Link } from "react-router-dom"
import { Col, Row } from "react-bootstrap"

export default function Page404() {
  return (
    <div className="app flex-row align-items-center">
      <Row className="justify-content-center">
        <Col md="5">
          <div className="auth-form-wrap pt-xl-0 pt-70">
            <div className="auth-form w-xl-30 w-lg-65 w-sm-85 w-100 card pa-25 shadow-lg">
              <a className="auth-brand text-center d-block mb-45" href="/">
                <img src={`/assets/img/logo.svg`} height={150} alt={"343"} />
              </a>
              <form>
                <h1 className="display-4 mb-10 text-center">404. Không tìm thấy.</h1>
                <p className="mb-30 text-center">
                  Trang bạn yêu cầu thật sự không tồn tại. Bạn có thể{" "}
                  <Link to="/">
                    <u>trở về trang chủ</u>
                  </Link>{" "}
                  hoặc tìm kiếm đúng trang bạn đang cần tới.
                </p>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control form-control-lg filled-input rounded-input"
                      placeholder="Tìm và gõ Enter"
                      type="text"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <span className="feather-icon">
                          <i className="fas fa-search" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
