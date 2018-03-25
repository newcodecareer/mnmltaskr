import React, { Component } from 'react'
import { Container, Header, Grid, Segment } from 'semantic-ui-react'

import StepContainer from '../containers/StepContainer'
import WizardContainer from '../containers/WizardContainer'
import showResult from './showResult'

export default class PostATask extends React.Component {
  render() {
    return (
      <div>
        <Header>POST A TASK</Header>
        <Grid>
          <Grid.Column width={4}>
            {/* custom content */}
            <StepContainer />
          </Grid.Column>
          <Grid.Column width={8}>
            {/* custom content */}
            <WizardContainer onSubmit={showResult}/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
