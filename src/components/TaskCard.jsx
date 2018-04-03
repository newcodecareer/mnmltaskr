import React, { Component } from 'react'
import { format } from 'date-fns'
import { Divider, Card, Button, Label, List } from 'semantic-ui-react'

export default class TaskCard extends Component {
  render () {
    const {
      title,
      description,
      type,
      location,
      due,
      budget,
      availability
    } = this.props

    return (
      <Card as='a' color='grey'>
        <Card.Content>
          <Card.Header>
            <div
              style={{
                marginRight: '4em',
                paddingTop: '1ex'
              }}
            >
              {title}
            </div>
            <Label
              as='a' tag
              style={{ backgroundColor: '#f8ed62' }}
              size='large'
              attached='top right'
            >
              &#8369; {budget}
            </Label>
          </Card.Header>
          <Divider />
          {/* <Card.Meta>
            {description}
          </Card.Meta> */}
          <Card.Description>
            <List animated
              verticalAlign='middle'>
              {/* <List.Item>
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
              </List.Item> */}
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
          <div
            style={{
              paddingTop: '0.5em',
              float: 'left'
            }}
          >
            {
              availability
                ? <label style={{ color: 'olive' }}>OPEN</label>
                : <label>ASSIGNED</label>
            }
          </div>
          <Button
            floated='right'
            size='small'
          >
            Make an offer
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
