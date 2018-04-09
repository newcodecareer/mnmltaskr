import React from 'react'
import { Modal, Button, Icon, Header, Divider, Card } from 'semantic-ui-react'
import { fetchUserBids } from '../actions/tasksActions'
import OfferCard from './OfferCard'
import { Link } from 'react-router-dom'

const Offers = (props) => {
  const { id, title } = props
  const bidders = fetchUserBids(id)

  console.log('bidders', bidders)

  return (
    <Modal open basic size='large'>
      <Modal.Content>
        <Button
          as={Link}
          to='/my-tasks'
          floated='right'
          icon circular
          basic inverted
          size='tiny'
        >
          <Icon name='close' />
        </Button>
        <Header inverted>
          <Header.Subheader>OFFERS FOR</Header.Subheader>
          <Header.Content>{title}</Header.Content>
        </Header>
        <Divider inverted />
        {
          bidders.length > 0
            ? <Card.Group>
              {
                bidders.map((bidder) => (
                  <OfferCard {...bidder} key={bidder.uid} />
                ))
              }
            </Card.Group>
            : <div>No offers yet!</div>
        }
        <Divider inverted />
      </Modal.Content>
    </Modal>
  )
}

export default Offers
