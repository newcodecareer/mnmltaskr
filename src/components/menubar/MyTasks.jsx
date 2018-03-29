import React, { Component } from 'react'
import { Header, Card } from 'semantic-ui-react'
import TaskCard from '../TaskCard'

export default class MyTasks extends Component {
  componentWillMount () {
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
