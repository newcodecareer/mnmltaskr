import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

import StepContainer from '../../containers/StepContainer'
import WizardContainer from '../../containers/WizardContainer'

import { postTask } from '../../actions/firestore-actions/firestoreActions'

export default class PostATask extends Component {
  render () {
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
            <WizardContainer onSubmit={postTask}/>
            {/* <WizardContainer /> */}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
