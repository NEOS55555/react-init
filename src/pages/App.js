import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.scss'

import Com from './com'

import { RouteWithRoutes } from '@/util'

import routes from '@/router'

export default class App extends Component {
  state = {
    initval: {},
  }
  componentDidMount() {
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
      <HashRouter>
        {this.state.initval && <Com initval={this.state.initval} />}
        <ul>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
        </ul>

        <RouteWithRoutes routes={routes} abcdef="adfs" />
      </HashRouter>
    )
  }
}
