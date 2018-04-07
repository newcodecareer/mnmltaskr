import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import TaskCard from '../TaskCard'
import BiddingContainer from '../../containers/BiddingContainer'
import { makeAnOffer } from '../../actions/firestore/dbActions'

const renderBidding = ({ match }) => (
  <BiddingContainer
    onSubmit={makeAnOffer}
    initialValues={{
      id: `${match.params.id}`,
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
      <div>
        <Header textAlign='center'>BROWSE TASKS</Header>
        <Card.Group centered>
          {
            tasks.map((task, index) => {
              return <TaskCard
                key={index + 'uniquemi'}
                {...task}
              />
            })
          }
        </Card.Group>
        <Route
          path='/browse-tasks/bidding/:id&:title'
          component={renderBidding}
        />
      </div>
    )
  }
}

export default BrowseTasks
