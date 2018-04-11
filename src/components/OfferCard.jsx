import React from 'react'
import { Card, Label, Button, Comment } from 'semantic-ui-react'
import { acceptOffer } from '../actions/firestore/dbActions'

const OfferCard = (props) => {
  const { owner, taskId, firstName, bidId,
    gender, offer, reason, accepted } = props

  return (
    <Card color='blue'>
      <Card.Content>
        <Card.Description>
          <Comment.Group>
            <Comment>
              <Comment.Avatar
                src={
                  gender === 'male'
                    ? '/images/matthew.png'
                    : '/images/molly.png'
                }
              />
              <Comment.Content>
                <Comment.Author as='a'>
                  {firstName}
                </Comment.Author>
                <Comment.Metadata>
                  has made an offer!
                </Comment.Metadata>
                <Comment.Text>
                  {reason}
                </Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label as='a' size='large'
          style={{
            backgroundColor: '#f8ed62'
          }}
        >&#8369; {offer}
        </Label>
        <Button
          onClick={() => acceptOffer(owner, taskId, bidId, offer)}
          disabled={accepted}
          floated='right'
          size='tiny'
        >Accept Offer
        </Button>
      </Card.Content>
    </Card>
  )
}

export default OfferCard
