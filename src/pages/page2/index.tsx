import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { RouteWithRoutes } from '@/util/index.js'
import Page3 from '@/pages/page3'
import {Button} from 'antd'
// let list: Array<number | string> = [1, 2, 3, 's']
function Index(props: any) {
  useEffect(() => {
    console.log('进入页面2')
  }, [])
  return (
    <div>
      页面2<Link to={props.match.path + '/page3'}>page3</Link>
      <Page3 abc={555} def={'这是字符串的呢'}/>
      <Button>牛逼</Button>
      <RouteWithRoutes routes={props.routes} abc="asdffg" />
      {/* <Switch>
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch> */}
    </div>
  )
}

export default Index
