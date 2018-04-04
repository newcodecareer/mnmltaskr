import React from 'react'
import { Sidebar } from 'semantic-ui-react'

import ProfileContainer from '../containers/ProfileContainer'
import Menu from '../containers/MenuContainer'
import Body from './Body'

const Main = (props) => (
  <div>
    <Sidebar.Pushable style={{ minHeight: '100vh' }}>
      <Sidebar.Pusher>
        <Menu />
        <Body />
      </Sidebar.Pusher>
      {/* sidebar goes here */}
      <ProfileContainer />
    </Sidebar.Pushable>
  </div>
)

export default Main
