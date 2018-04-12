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
  { url: '/', title: 'Posted tasks' },
  { url: '/open', title: 'Open tasks' },
  { url: '/assigned', title: 'Assigned tasks' },
  { url: '/bidded', title: 'Bidded tasks' },
  { url: '/pending', title: 'Pending tasks' },
  { url: '/ongoing', title: 'Ongoing tasks' },
  { url: '/completed', title: 'Completed tasks' }
]
const renderFilters = (setFilterUrl) => (
  <div style={{ paddingBottom: '2rem' }}>
    {
      filters.map((filter, index) =>
        <Button size='tiny'
          key={filter.url + index}
          style={{
            marginTop: '2pt'
          }}
          onClick={() =>
            setFilterUrl(filter.url)
          }
        >{filter.title}
        </Button>
      )
    }
  </div>
)

class MyTasks extends Component {
  componentDidMount () {
    this.props.fetchPostedTasks()
    this.props.fetchBiddedTasks()
    this.props.fetchTasksByAvailability(true)
    this.props.fetchTasksByAvailability(false)
    this.props.fetchTransactions('pending')
    this.props.fetchTransactions('ongoing')
    this.props.fetchTransactions('completed')
  }

  componentWillUnmount () {
    this.props.setFilterUrl('/')
  }

  render () {
    const { filterUrl, setFilterUrl } = this.props
    let { postedTasks, biddedTasks,
      assignedTasks, openTasks, pendingTasks,
      ongoingTasks, completedTasks } = this.props

    let tasks = []
    switch (filterUrl) {
      case '/': {
        postedTasks = postedTasks || []
        tasks = postedTasks
        break
      } case '/bidded': {
        biddedTasks = biddedTasks || []
        tasks = biddedTasks
        break
      } case '/assigned': {
        assignedTasks = assignedTasks || []
        tasks = assignedTasks
        break
      } case '/open': {
        openTasks = openTasks || []
        tasks = openTasks
        break
      } case '/pending': {
        pendingTasks = pendingTasks || []
        tasks = pendingTasks
        break
      } case '/ongoing': {
        ongoingTasks = ongoingTasks || []
        tasks = ongoingTasks
        break
      } case '/completed': {
        completedTasks = completedTasks || []
        tasks = completedTasks
        break
      }
    }

    console.log('tasks', tasks)

    return (
      <Container>
        <Segment style={{ padding: '6em 0em 4em 0em' }} vertical>
          <div>
            <Header>
              <span>MY TASKS</span>
              <span style={{ color: 'grey' }}>
                {` ${filterUrl}`}
              </span>
            </Header>
            { renderFilters(setFilterUrl) }
            { tasks.length > 0
              ? <Card.Group>
                {
                  tasks.map((task, index) => (
                    <TaskCard
                      key={index + 'uniquemi2'}
                      {...task}
                    />
                  ))
                }
              </Card.Group>
              : <div>You have no {filterUrl} tasks yet!</div>
            }
            <Route path='/my-tasks/view-offers/:taskId&:title'
              component={renderOffers}
            />
          </div>
        </Segment>
      </Container>
    )
  }
}

export default MyTasks
