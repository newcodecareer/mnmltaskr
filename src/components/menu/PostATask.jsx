import React from 'react'
import { Header, Container, Segment } from 'semantic-ui-react'
import StepContainer from '../../containers/StepContainer'
import WizardContainer from '../../containers/WizardContainer'
import { postTask } from '../../actions/firestore/dbActions'

const PostATask = (props) => (
  <Container text>
    <Segment vertical style={{ paddingTop: '6em', paddingBottom: '4em' }}>
      <Header>POST A TASK</Header>
      <div style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>
        <WizardContainer onSubmit={postTask}/>
      </div>
      <div><StepContainer /></div>
    </Segment>
  </Container>
)

export default PostATask
