import React, { lazy } from "react"

const NavbarSearch = lazy(() => import("./NavbarSearch"))
const NavbarInfo = lazy(() => import("./NavbarInfo"))

export default function NavbarHeader(props) {
  return (
    <div className="navbar-header navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavbarSearch />
        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
          <li className="nav-item toggle-nav-search hidden-caret">
            <a className="nav-link" href="/search-nav" role="button">
              <i className="fa fa-search"></i>
            </a>
          </li>
          <NavbarInfo {...props} />
        </ul>
      </div>
    </div>
  )
}
