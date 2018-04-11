import React, { Component } from 'react'
import { Header, Card, Container, Segment } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import TaskCard from '../TaskCard'
import BiddingContainer from '../../containers/BiddingContainer'
import { makeAnOffer } from '../../actions/firestore/dbActions'

const renderBidding = ({ match }) => (
  <BiddingContainer
    onSubmit={makeAnOffer}
    initialValues={{
      taskId: `${match.params.taskId}`,
      title: `${match.params.title}`
    }}
  />
)

class BrowseTasks extends Component {
  componentDidMount () {
    this.props.fetchTasks()
  }

  render () {
    let { tasks } = this.props

    if (!tasks) {
      tasks = []
    }

    return (
      <Container>
        <Segment style={{ padding: '6em 0em 4em 0em' }} vertical>
          <div>
            <Header textAlign='center'>BROWSE TASKS</Header>
            <Card.Group centered>
              {
                tasks.map((task, index) => (
                  <TaskCard
                    key={index + 'uniquemi'}
                    {...task}
                  />
                ))
              }
            </Card.Group>
            <Route
              path='/browse-tasks/bidding/:taskId&:title'
              component={renderBidding}
            />
          </div>
        </Segment>
      </Container>
    )
  }
}

export default BrowseTasks
