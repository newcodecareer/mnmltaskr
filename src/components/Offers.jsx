import React from 'react'
import { Modal, Container, Button, Icon, Header, Divider, Card } from 'semantic-ui-react'
import { fetchUserBids } from '../actions/tasksActions'
import OfferCard from './OfferCard'
import { Link } from 'react-router-dom'

const Offers = (props) => {
  const { id, title } = props
  const bidders = fetchUserBids(id)

  console.log('bidders', bidders)

  return (
    <Modal open basic>
      <Container>
        <Header inverted>
          <Header.Subheader>OFFERS FOR</Header.Subheader>
          <Header.Content>{title}</Header.Content>
        </Header>
        <Divider inverted />
        <Card.Group>
          {
            bidders.map((bidder) => (
              <OfferCard {...bidder} key={bidder.uid} />
            ))
          }
        </Card.Group>
        <Divider inverted />
        <Button
          as={Link}
          to='/my-tasks'
          floated='right'
          icon circular
          basic inverted
        >
          <Icon name='arrow left' />
        </Button>
      </Container>
    </Modal>
  )
}

export default Offers
