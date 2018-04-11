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
  { url: '/bidded', title: 'Bidded tasks' }
]
const renderFilters = (setFilterUrl) => (
  <div style={{ paddingBottom: '2rem' }}>
    {
      filters.map((filter, index) =>
        <Button size='tiny'
          key={filter.url + index}
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
  }

  render () {
    const { filterUrl, setFilterUrl } = this.props
    const { postedTasks, biddedTasks } = this.props

    console.log('filerURL', filterUrl)

    let tasks = []
    switch (filterUrl) {
      case '/': {
        tasks = postedTasks
        break
      } case '/bidded': {
        tasks = biddedTasks
      }
    }

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
            { tasks
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
              : <div>You have no tasks yet!</div>
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
