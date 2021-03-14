import React from "react"
import { Link } from "react-router-dom"

/**
 * Container tất cả các views
 * @param {*} props
 */
export default function Container({ viewName, viewIcon, match }) {
  const views = match?.path?.split("/")
  return (
    <div className="page-header">
      <h4 className="page-title">{viewName || ""}</h4>
      {viewName && (
        <ul className="breadcrumbs">
          <li className="nav-home">
            <Link to="/">
              <i className="fas fa-home" />
            </Link>
          </li>
          {views &&
            views.map(
              (e, i) =>
                i > 0 &&
                i < views.length - 1 && (
                  <React.Fragment key={i}>
                    <li className="separator">
                      <i className="fas fa-chevron-right" />
                    </li>
                    <li className="nav-item">{e}</li>
                  </React.Fragment>
                )
            )}
          <li className="separator">
            <i className="fas fa-chevron-right" />
          </li>
          <i className={viewIcon || ""} />{" "}
          <li className="nav-item">{viewName || ""}</li>
        </ul>
      )}
    </div>
  )
}
