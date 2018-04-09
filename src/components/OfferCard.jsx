import React from 'react'
import { Card, Label, Button, Comment } from 'semantic-ui-react'

const OfferCard = (props) => {
  const { uid, firstName, gender, offer, reason } = props

  return (
    <Card color='grey'>
      <Card.Content>
        <Card.Header>
          <Label as='a' tag
            size='large'
            attached='top right'
            style={{ backgroundColor: '#f8ed62' }}
          >
            &#8369; {offer}
          </Label>
        </Card.Header>
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
        <Button
          floated='right'
          size='tiny'
        >
          Accept Offer
        </Button>
      </Card.Content>
    </Card>
  )
}

export default OfferCard
