import React, { Component } from 'react'
import { Modal, Button, Icon, Header, Divider, Card } from 'semantic-ui-react'
import OfferCard from './OfferCard'
import { Link } from 'react-router-dom'

class Offers extends Component {
  componentDidMount () {
    const { taskId, fetchTaskBids } = this.props
    fetchTaskBids(taskId)
  }

  render () {
    let { title, bids } = this.props
    const apps = [
      { taskerId: 'abc', fee: 20 },
      { taskerId: 'efg', fee: 20 },
      { taskerId: 'hij', fee: 20 }
    ]

    const inc = apps.filter(app => app.taskerId === 'cfg')
    console.log('includes includes', inc)

    if (!bids) {
      bids = []
    }

    return (
      <Modal open basic size='large'>
        <Modal.Content>
          <Button
            as={Link}
            to='/my-tasks'
            floated='left'
            style={{
              margin: '5px 20px 5px 30px'
            }}
            icon circular
            basic inverted
            size='tiny'
          >
            <Icon name='arrow left' />
          </Button>
          <Header as='a' inverted>
            <Header.Subheader>OFFERS FOR</Header.Subheader>
            <Header.Content>{title}</Header.Content>
          </Header>
          <Divider inverted />
          {
            bids.length > 0
              ? <Card.Group>
                {
                  bids.map((bid, index) => (
                    <OfferCard {...bid} key={bid.owner + index} />
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
}

export default Offers
