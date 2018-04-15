import React, { Component } from 'react'
import { Modal, Button, Header, Divider, Card } from 'semantic-ui-react'
import OfferCard from './OfferCard'
import { Link } from 'react-router-dom'

class Offers extends Component {
  componentDidMount () {
    const { taskId, fetchTaskBids } = this.props
    fetchTaskBids(taskId)
  }

  render () {
    let { title, bids } = this.props
    bids = bids || []

    return (
      <Modal open basic size='large'>
        <Modal.Content>
          <Header inverted>
            <Header.Subheader>List of Bidders for</Header.Subheader>
            <Header.Content>{title}</Header.Content>
          </Header>
          <Button as={Link} to='/my-tasks' basic inverted size='mini'>Go back</Button>
          <Divider hidden />
          { bids.length > 0
            ? <Card.Group>
              { bids.map((bid, index) => (
                <OfferCard {...bid} key={bid.owner + index} />
              ))
              }
            </Card.Group>
            : <div>No offers yet!</div>
          }
          <Divider hidden />
        </Modal.Content>
      </Modal>
    )
  }
}

export default Offers
