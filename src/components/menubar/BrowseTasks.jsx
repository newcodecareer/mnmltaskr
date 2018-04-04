import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import TaskCard from '../TaskCard'

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
      </div>
    )
  }
}

export default BrowseTasks
