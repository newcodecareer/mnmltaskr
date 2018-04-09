import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
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
      <div>
        <Header textAlign='center'>MY TASKS</Header>
        <Card.Group centered>
          {
            postedTasks.map((task, index) => {
              return <TaskCard
                key={index + 'uniquemi'}
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
    )
  }
}

export default MyTasks
