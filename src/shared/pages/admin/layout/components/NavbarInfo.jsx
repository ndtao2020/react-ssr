import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Dropdown } from "react-bootstrap"
import { userSelector } from "../../redux/selector"
import { logoutAccount } from "../../routes/permission"

export default function NavbarInfo() {
  const {
    user: { name, idAvartar, authorities },
  } = useSelector(userSelector)
  return (
    <Dropdown className="hidden-caret nav-item">
      <Dropdown.Toggle className="profile-pic">
        <div className="avatar-sm">
          <img src={idAvartar} alt="123" />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-user animated fadeIn">
        <div className="user-box">
          <div className="avatar-lg">
            <img src={idAvartar} alt="123" />
          </div>
          <div className="u-text">
            <h4>{name || ""}</h4>
            <p className="text-muted">{authorities && authorities.join(", ")}</p>
            <Link
              to="/view/base/profile"
              className="btn btn-rounded btn-danger btn-sm"
            >
              Thông tin người dùng
            </Link>
          </div>
        </div>
        <div className="dropdown-divider" />
        <Dropdown.Item onClick={() => logoutAccount()}>Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
