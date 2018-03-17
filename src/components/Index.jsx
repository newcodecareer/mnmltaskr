import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import ItemsContainer from '../containers/ItemsContainer'
// import Header from './Header'

class Index extends React.Component {
  render() {
    return (
      <div>
        <ItemsContainer />
        {/* <Header /> */}
        {/* <Body /> */}
      </div>
    )
  }
}
  
export default Index