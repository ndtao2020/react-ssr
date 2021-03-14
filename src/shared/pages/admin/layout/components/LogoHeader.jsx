import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function LogoHeader() {
  const [minimized, setMinimized] = useState(false)
  const [opened, setOpened] = useState(false)
  const [topbared, setTopbared] = useState(false)
  // Get element
  const element = document.getElementById("root")
  const toggleClass = (name, toggle, calllBack) => {
    if (!toggle) {
      element.classList.add(name)
    } else {
      element.classList.remove(name)
    }
    calllBack()
  }
  return (
    <div className="logo-header">
      <Link to="/" className="logo">
        <img
          src={`/assets/img/logo.svg`}
          className="navbar-brand"
          style={{ marginLeft: 10 }}
          width={"auto"}
          height={35}
          alt={"1213"}
        />
      </Link>
      <button
        aria-label="Toggle navigation"
        type="button"
        className={`navbar-toggler sidenav-toggler ml-auto${
          opened ? " toggled" : ""
        }`}
        onClick={() => toggleClass("nav_open", opened, () => setOpened(!opened))}
      >
        <span className="navbar-toggler-icon">
          <i className="fa fa-bars" />
        </span>
      </button>
      <button
        className={`topbar-toggler more${topbared ? " toggled" : ""}`}
        onClick={() =>
          toggleClass("topbar_open", topbared, () => setTopbared(!topbared))
        }
      >
        <i className="fa fa-ellipsis-v" />
      </button>
      <div className="navbar-minimize">
        <button
          className={`btn btn-minimize btn-rounded${minimized ? " toggled" : ""}`}
          onClick={() =>
            toggleClass("sidebar_minimize", minimized, () =>
              setMinimized(!minimized)
            )
          }
        >
          {minimized ? (
            <i className="fa fa-ellipsis-v" />
          ) : (
            <i className="fa fa-bars" />
          )}
        </button>
      </div>
    </div>
  )
}
