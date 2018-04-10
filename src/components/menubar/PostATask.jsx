import React from 'react'
import { Header, Grid, Container, Segment } from 'semantic-ui-react'

import StepContainer from '../../containers/StepContainer'
import WizardContainer from '../../containers/WizardContainer'

import { postTask } from '../../actions/firestore/dbActions'

const PostATask = (props) => (
  <Container>
    <Segment style={{ padding: '6em 0em 4em 0em' }} vertical>
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
    </Segment>
  </Container>
)

export default PostATask
