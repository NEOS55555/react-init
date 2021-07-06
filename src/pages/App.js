import React, { Component, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.scss'
import { eventBus } from '@/util'

import Com from './com'

import { RouteWithRoutes } from '@/util'

import routes from '@/router'

class App extends Component {
  state = {
    initval: {},
  }
  componentDidMount() {
    console.log('ffffffffffff', this.props)
    eventBus.on('history#login', () => {
      this.props.history.push('/login')
    })
    this.setState({
      initval: {
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      },
    })
  }
  render() {
    return (
      <>
        {/* {this.state.initval && <Com initval={this.state.initval} />} */}
        <ul>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
        </ul>

        <RouteWithRoutes routes={routes} abcdef="adfs" />
      </>
    )
  }
}

export default withRouter(App)
