import React, { lazy, useCallback, useEffect } from "react"
import { Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { userAction } from "../redux/actions"
import RenderSuspense from "@/shared/components/RenderSuspense"

const LogoHeader = lazy(() => import("./components/LogoHeader"))
const NavbarHeader = lazy(() => import("./components/NavbarHeader"))
const Sidebar = lazy(() => import("./components/Sidebar"))
const PageInner = lazy(() => import("./components/PageInner"))
const Footer = lazy(() => import("./components/Footer"))

export default function DefaultLayout(props) {
  const dispatch = useDispatch()

  const inintData = useCallback(() => {
    dispatch(
      userAction.setUser({
        name: "Taoqn",
        idAvartar: "123",
        authorities: ["System"],
      })
    )
  })

  useEffect(() => {
    inintData()
  }, [inintData])

  return (
    <>
      <div className="main-header">
        <LogoHeader />
        <NavbarHeader />
      </div>
      <RenderSuspense>
        <Sidebar />
      </RenderSuspense>
      <div className="main-panel">
        <div className="content">
          <div className="page-inner">
            <Container fluid>
              <PageInner {...props} />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
