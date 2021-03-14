import React from "react"
import configBuild from "../../../../configs/build"
import { Nav, Navbar, Form, FormControl, InputGroup, Button } from "react-bootstrap"

function f() {
  return (
    <div className="container px-0">
      <Navbar bg="white" variant="light" expand="sm">
        <div className="d-sm-none d-flex m-nav-brand">
          <a href="/" className="navbar-brand">
            <img
              width={48}
              className="brand-img"
              src={`/${configBuild.folderAssets}/l.svg`}
              alt={"SÀN ĐẤU GIÁ"}
            />
          </a>
          <Form className="form-inline mb-0 mr-2">
            <InputGroup>
              <FormControl placeholder="Tìm kiếm thông tin cá Koi" />
              <InputGroup.Append>
                <Button variant="primary" type="submit">
                  <i className="fas fa-search" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default React.memo(f)
