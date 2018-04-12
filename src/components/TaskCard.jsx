import React from 'react'
import { format } from 'date-fns'
import { Divider, Card, Button, Label, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { getUser } from '../actions/firestore/authUser'
import { completeTask } from '../actions/firestore/dbActions'

const renderOfferButton = (taskId, title, open) => (
  <Button
    as={Link} disabled={!open}
    to={`/browse-tasks/bidding/${taskId}&${title}`}
    floated='right'
    size='small'
  >
    Make an offer
  </Button>
)

const renderBidsButton = (taskId, title) => (
  <Button
    as={Link}
    to={`/my-tasks/view-offers/${taskId}&${title}`}
    floated='right'
    size='small'
  >
    View offers
  </Button>
)

const markCompletedButton = (taskId) => (
  <Button
    onClick={() =>
      completeTask(taskId)
    }
    floated='right'
    size='small'
  >
    Mark completed
  </Button>
)

const TaskCard = (props) => {
  const {
    id,
    title,
    desc,
    type,
    location,
    due,
    budget,
    open,
    owner,
    status
  } = props

  return (
    <Card color='teal'>
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
            style={{
              backgroundColor: '#f8ed62'
            }}
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
            {desc}
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
            open
              ? <label style={{ color: 'olive' }}>OPEN</label>
              : <label>ASSIGNED</label>
          }
        </div>
        {
          status === 'ongoing'
            ? markCompletedButton(id)
            : <div>{
              owner === getUser().uid
                ? renderBidsButton(id, title)
                : renderOfferButton(id, title, open)
            }</div>
        }
      </Card.Content>
    </Card>
  )
}

export default TaskCard
