import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

// Childs
import Bar from "./Bar"
import HeadMain from "./HeadMain"
import Navigation from "./Navigation"

export default function Header({ isLogin }) {
  return (
    <>
      <Bar isLogin={isLogin} />
      <HeadMain />
      <Navigation />
    </>
  )
}

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}
