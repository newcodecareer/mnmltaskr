import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import TaskCard from '../TaskCard'

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
      </div>
    )
  }
}

export default MyTasks
