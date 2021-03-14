import React from "react"
import { hydrate } from "react-dom"
import Header from "../../shared/components/header"

hydrate(<Header {...window.__HEADER__} />, document.getElementById("b7c26"))
