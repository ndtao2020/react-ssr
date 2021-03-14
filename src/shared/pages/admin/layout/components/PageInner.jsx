import React, { lazy } from "react"
import { useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"
import Breadcrumbs from "./Breadcrumbs"
import Nprogress from "../Nprogress"
import RenderSuspense from "@/shared/components/RenderSuspense"
import { menuSelector } from "../../redux/selector"
import { checkLinkURL, getAllRoute } from "../../routes/permission"

const Page404 = lazy(() => import("../../views/base/page404/Page404"))

export default function PageInner() {
  const { menu } = useSelector(menuSelector)
  return (
    <RenderSuspense>
      <Switch>
        {menu &&
          getAllRoute(menu).map((route, i) => (
            <Route
              key={i}
              exact={true}
              path={checkLinkURL(route.path)}
              name={route.viewName}
              render={(props) => (
                <Nprogress>
                  <Breadcrumbs
                    viewName={route.viewName}
                    viewIcon={route.viewIcon}
                    match={props.match}
                  />
                  <route.component {...props} />
                </Nprogress>
              )}
            />
          ))}
        <Route name="404" render={(props) => <Page404 {...props} />} />
      </Switch>
    </RenderSuspense>
  )
}
