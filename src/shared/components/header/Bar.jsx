import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { PREFIX_UPLOAD_URL, UPLOAD_API_URL } from "../../paths"
import fetchApi from "../../../../utils/ClientCallApi"
import configBuild from "../../../../configs/build"

// Export
export default function Bar({ isLogin }) {
  // states
  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState(null)
  const [idAvartar, setIdAvartar] = useState(null)
  // Call API
  useEffect(() => {
    if (isLogin) {
      // Lấy thông tin tài khoản
      setName("123")
      // Lấy thông tin avartar tài khoản
      setIdAvartar("1232")
    }
  }, [isLogin])
  return (
    <div className="head-bar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="head-category">
          <span>Chọn đấu giá</span>
        </div>
        {!isLogin && (
          <div className="btn-group">
            <a href="/signup" className="btn btn-sm btn-link text-white no-shadow">
              <i className="fas fa-user d-none d-sm-inline-block" />
              <span> Đăng ký</span>
            </a>
            <a href="/login" className="btn btn-sm btn-link text-white no-shadow">
              <i className="fas fa-sign-in-alt d-none d-sm-inline-block" />
              <span> Đăng nhập</span>
            </a>
          </div>
        )}
        {isLogin && (
          <div className="head-profile">
            <div className={`btn-group-sm dropdown ${toggle ? "show" : ""}`}>
              <a
                style={{ cursor: "pointer", color: "white" }}
                aria-haspopup="true"
                className="nav-link dropdown-toggle"
                aria-expanded="true"
                onClick={() => setToggle(!toggle)}
              >
                <img
                  className="head-avatar rounded-circle"
                  alt="avartar"
                  src={
                    idAvartar
                      ? `${PREFIX_UPLOAD_URL}${UPLOAD_API_URL}/Picture/image?id=${idAvartar}`
                      : `/${configBuild.folderAssets}/m.png`
                  }
                />
                {name || ""}
              </a>
              <div
                tabIndex={-1}
                role="menu"
                aria-hidden="false"
                className={`dropdown-menu ${toggle ? "show" : ""}`}
              >
                <a
                  href="/profile"
                  tabIndex={0}
                  role="menuitem"
                  className="dropdown-item"
                >
                  Thông tin cá nhân
                </a>
                <div tabIndex={-1} className="dropdown-divider" />
                <a
                  tabIndex={0}
                  style={{ cursor: "pointer" }}
                  role="menuitem"
                  className="dropdown-item"
                  onClick={() =>
                    fetchApi("", "/logout", "POST").then(() => location.reload())
                  }
                >
                  Đăng xuất
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Bar.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}
