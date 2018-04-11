import React, { Component } from 'react'
import { Header, Card, Container, Segment, Button } from 'semantic-ui-react'
import TaskCard from '../TaskCard'
import { Route } from 'react-router-dom'
import OffersContainer from '../../containers/OffersContainer'

const renderOffers = ({ match }) => (
  <OffersContainer
    taskId={match.params.taskId}
    title={match.params.title}
  />
)

const filters = [
  { key: 'posted', title: 'Posted tasks' },
  { key: 'completed', title: 'Task completed' }
]
const renderFilters = () => (
  <div style={{ paddingBottom: '2rem' }}>
    {
      filters.map((filter, index) =>
        <Button size='tiny' basic
          key={filter.key + index}
        >{filter.title}
        </Button>
      )
    }
  </div>
)

class MyTasks extends Component {
  componentDidMount () {
    this.props.fetchPostedTasks()
  }

  render () {
    let { postedTasks } = this.props

    if (!postedTasks) {
      postedTasks = []
    }

    return (
      <Container>
        <Segment style={{ padding: '6em 0em 4em 0em' }} vertical>
          <div>
            <Header>MY TASKS</Header>
            { renderFilters() }
            {
              postedTasks.length > 0
                ? <Card.Group>
                  {
                    postedTasks.map((task, index) => (
                      <TaskCard
                        key={index + 'uniquemi2'}
                        {...task}
                      />
                    ))
                  }
                </Card.Group>
                : <div>You have no tasks yet!</div>
            }
            <Route
              path='/my-tasks/view-offers/:taskId&:title'
              component={renderOffers}
            />
          </div>
        </Segment>
      </Container>
    )
  }
}

export default MyTasks
