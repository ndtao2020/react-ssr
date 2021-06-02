import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { generateTree } from "../../../../../../utils/Tree"
import { menuSelector } from "../../redux/selector"
import { checkLinkURL } from "../../routes/permission"

const checkChildren = (array) => array.children && array.children.length > 0

const Item = ({ item, level, haveChildren, open, onClick }) => {
  const content = (
    <>
      {level === 0 && <i className={`nav-item-icon ${item.icon}`} />}
      {level === 0 && <p>{item.name}</p>}
      {level > 0 && (
        <span className="sub-item">
          <i className={`nav-sub-item-icon ${item.icon}`} />
          {item.name}
        </span>
      )}
    </>
  )
  return (
    <>
      {!haveChildren && (
        <Link to={checkLinkURL(item.path)} onClick={() => onClick && onClick()}>
          {content}
        </Link>
      )}
      {haveChildren && (
        <>
          <div className="nav-sub-item-parent" onClick={() => onClick && onClick()}>
            {content}
            <span className="caret" />
          </div>
          <SubMenu items={item.children} open={open} level={level + 1} />
        </>
      )}
    </>
  )
}

const SubMenu = ({ items, open, level }) => (
  <div className={`collapse${open ? " show" : ""}`}>
    <ul className={`nav nav-collapse ${level > 1 ? "subnav" : ""}`}>
      {items &&
        items.map((item, i) => (
          <Root
            key={i}
            item={item}
            haveChildren={checkChildren(item)}
            level={level + 1}
          />
        ))}
    </ul>
  </div>
)

const Root = (props) => {
  const { level, haveChildren } = props
  const [open, setOpen] = useState(false)
  return level === 0 ? (
    <div className={`nav-item${open === true ? " submenu" : ""}`}>
      <Item {...props} open={open} onClick={() => haveChildren && setOpen(!open)} />
    </div>
  ) : (
    <li>
      <Item {...props} open={open} onClick={() => haveChildren && setOpen(!open)} />
    </li>
  )
}

/**
 * @author Nguyễn Đình Tạo
 */
export default function Menu() {
  const { menu } = useSelector(menuSelector)
  return (
    menu &&
    generateTree(menu, "uuid", "uuidParent").map((item, i) => (
      <Root key={i} item={item} haveChildren={checkChildren(item)} level={0} />
    ))
  )
}
