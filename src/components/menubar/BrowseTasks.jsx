import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import TaskCard from '../TaskCard'

export default class BrowseTasks extends React.Component {
  componentWillMount() {
    this.props.fetchTasks()
  }

  render() {
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
            return <TaskCard key={index + 'uniquemi'}
              budget={task.budget}
              title={task.title}
              description={task.description}
              type={task.type}   
              location={task.location}
              due={task.due}
            />
          })
        }
        </Card.Group>
      </div>
    )
  }
}
