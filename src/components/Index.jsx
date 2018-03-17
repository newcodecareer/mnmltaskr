import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import ItemsContainer from '../containers/ItemsContainer'
import Body from './Body'
// import Header from './Header'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <ItemsContainer />
        <Body />
      </div>
    )
  }
}
  