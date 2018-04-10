import React, { Component } from 'react'
import { Header, Card, Container, Segment } from 'semantic-ui-react'
import TaskCard from '../TaskCard'
import { Route } from 'react-router-dom'
import Offers from '../Offers.jsx'

const renderOffers = ({ match }) => (
  <Offers
    id={match.params.id}
    title={match.params.title}
  />
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
            <Header textAlign='center'>MY TASKS</Header>
            <Card.Group centered>
              {
                postedTasks.map((task, index) => {
                  return <TaskCard
                    key={index + 'uniquemi2'}
                    {...task}
                  />
                })
              }
            </Card.Group>
            <Route
              path='/my-tasks/view-offers/:id&:title'
              component={renderOffers}
            />
          </div>
        </Segment>
      </Container>
    )
  }
}

export default MyTasks
