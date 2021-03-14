import React, { lazy } from "react"
import { Link } from "react-router-dom"
import SimpleBarReact from "simplebar-react"

const Profile = lazy(() => import("./Profile"))
const Menu = lazy(() => import("./Menu"))

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="sidebar-content">
          <Profile />
          <SimpleBarReact style={{ maxHeight: "calc(100vh - 75px - 50px)" }}>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/">
                  <i className="nav-item-icon fas fa-home" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h" />
                </span>
                <h4 className="text-section">Danh sách các Menu</h4>
              </li>
              <Menu />
            </ul>
          </SimpleBarReact>
        </div>
      </div>
    </div>
  )
}
