import React from 'react'
import { format } from 'date-fns'
import { Divider, Card, Button, Label, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getUser } from '../actions/firestore/authUser'

const renderOfferButton = (id, title) => (
  <Button
    as={Link}
    to={`/browse-tasks/bidding/${id}&${title}`}
    floated='right'
    size='small'
  >
    Make an offer
  </Button>
)

const renderBidsButton = (id, title) => (
  <Button
    as={Link}
    to={`/my-tasks/view-offers/${id}&${title}`}
    floated='right'
    size='small'
  >
    View offers
  </Button>
)

const TaskCard = (props) => {
  const {
    id,
    title,
    description,
    type,
    location,
    due,
    budget,
    availability,
    owner
  } = props

  return (
    <Card color='grey'>
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
        <Card.Description>
          <div>
            <Card.Meta>
                Description
            </Card.Meta>
            {description}
          </div>
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
        {
          owner === `/users/${getUser().uid}`
            ? renderBidsButton(id, title)
            : renderOfferButton(id, title)
        }
      </Card.Content>
    </Card>
  )
}

export default TaskCard
