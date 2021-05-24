import React from "react"
import configBuild from "../../../../configs/build"
import { Row, Col, Form, Badge } from "react-bootstrap"

export default function HeadMain() {
  return (
    <div>
      <div className="container py-2 d-none d-sm-block">
        <Row className="justify-content-between">
          <Col sm={"auto"} md={"auto"} lg={"auto"}>
            <a
              className="head-brand d-none d-sm-flex flex-nowrap align-items-center text-decoration-none"
              href="/"
            >
              <img
                width={48}
                className="brand-img"
                src={`/${configBuild.folderAssets}/l.svg`}
              />
              <span className="brand-text d-none d-md-inline">Home Page</span>
            </a>
          </Col>
          <Col xs={12} sm={10} md={"auto"} lg={"auto"}>
            <Form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Tìm kiếm thông tin cá Koi"
                  name="searchInput"
                  className="form-control"
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </Form>
          </Col>
          <Col md="auto" sm="auto" className="none-padding" lg={"auto"}>
            <div className="head-btn d-none d-lg-block btn-contain">
              <button
                className="btn btn-outline-primary mr-2"
                onClick={() => (location.href = "/profile/danh-sach-yeu-thich")}
              >
                <i className="fas fa-heart mr-1" />
                Yêu thích{" "}
                <Badge variant="secondary" className="ml-1">
                  {0}
                </Badge>
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => (location.href = "/profile/gio-hang")}
              >
                <i className="fas fa-shopping-cart mr-1" />
                Giỏ hàng
                <Badge variant="secondary" className="ml-1">
                  {0}
                </Badge>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
