import React from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        let mprops = {
          ...props,
          ...route.extendRrops,
        }
        if (route.auth && route.auth(mprops)) {
          return route.auth(mprops)
        }
        // pass the sub-routes down to keep nesting
        return <route.component {...mprops} routes={route.routes} />
      }}
    />
  )
}

function RouteWithRoutes({ routes, ...props }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} extendRrops={props} />
      ))}
    </Switch>
  )
}

const beforeEach = (props) => {
  return (
    <Redirect
      to={{
        pathname: '/login',
      }}
    />
  )
}

function routerPathTrans(data, path = '') {
  data.forEach((it) => {
    it.path = path + it.path
    it.routes && routerPathTrans(it.routes, it.path)
  })
}

export { RouteWithSubRoutes, beforeEach, RouteWithRoutes, routerPathTrans }
