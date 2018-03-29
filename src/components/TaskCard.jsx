import React, { Component } from 'react'
import { format } from 'date-fns'
import { Divider, Card, Button, Label, List } from 'semantic-ui-react'

export default class TaskCard extends Component {
  render () {
    const {
      budget,
      title,
      description,
      type,
      location,
      due
    } = this.props

    return (
      <Card color='grey'>
        <Card.Content>
          <Label as='a' tag size='large'
            attached='top right'>
            &#8369; {budget}
          </Label>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            {description}
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
                    {type}
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
                    {location}
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
                    {format(due, 'MMM D, YYYY / hh:mm:ssa')}
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
    )
  }
}
