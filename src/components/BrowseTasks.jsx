import React, { Component } from 'react'
import { format } from 'date-fns'
import { Divider, Segment, Header, 
  Card, Button, Image, Label, Icon, List } from 'semantic-ui-react'

export default class BrowseTasks extends React.Component {
  componentDidMount() {
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
            console.log()
            return <Card  color='grey' key={index + 'uniquemi'}>
                <Card.Content>
                  <Label as='a' tag size='large' 
                    attached='top right'>
                    &#8369; {task.budget}
                  </Label>
                  <Card.Header>
                    {task.title}
                  </Card.Header>
                  <Card.Meta>
                    {task.description}
                  </Card.Meta>
                  <Divider />
                  <Card.Description>
                    <List animated 
                      verticalAlign='middle'>
                      <List.Item>
                        <List.Icon name='globe' 
                          verticalAlign='middle' />
                        <List.Content>
                          <List.Header>
                            {task.type}
                          </List.Header>
                          <List.Description>
                            Type
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='point' 
                          verticalAlign='middle' />
                        <List.Content>
                          <List.Header>
                            {task.location}
                          </List.Header>
                          <List.Description>
                            Location
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name='calendar outline' 
                          verticalAlign='middle' />
                        <List.Content>
                          <List.Header>
                            {format(task.due, 'MMM D, YYYY / hh:mm:ssa')}
                          </List.Header>
                          <List.Description>
                            Due date
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  AVAILABLE
                  <Button floated='right' size='small'>Make an offer</Button>
                </Card.Content>
              </Card>
          })
        }
        </Card.Group>
      </div>
    )
  }
}
