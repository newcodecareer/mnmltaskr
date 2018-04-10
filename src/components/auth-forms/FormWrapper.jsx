import React from 'react'
import { Link } from 'react-router-dom'
import {
  Modal, Header,
  Button, Icon,
  Image, Segment
} from 'semantic-ui-react'

const FormWrapper = (props) => {
  const { message, children } = props

  return (
    <div>
      <Image fluid src='/images/hiw.gif' />
      <Modal open basic size='mini'>
        <Segment vertical style={{ paddingBottom: '6em' }}>
          <Button
            as={Link}
            to='/'
            floated='right'
            icon circular
            basic inverted
          >
            <Icon name='home' />
          </Button>
          <Header inverted textAlign='left'>
            <Header.Subheader>
                HELLO, FRIEND!
            </Header.Subheader>
            {message}
          </Header>
          {children}
        </Segment>
      </Modal>
    </div>
  )
}

export default FormWrapper
