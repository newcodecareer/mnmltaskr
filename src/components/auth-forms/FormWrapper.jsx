import React from 'react'
import { Modal, Header, Image, Segment } from 'semantic-ui-react'

const FormWrapper = (props) => {
  const { message, children } = props

  return (
    <div>
      <Image fluid src='/images/hiw.gif' />
      <Modal open basic size='mini'>
        <Segment vertical style={{ paddingBottom: '6em' }}>
          <Header inverted textAlign='left'>
            <Header.Subheader>Hello, friend!</Header.Subheader>
            {message}
          </Header>
          {children}
        </Segment>
      </Modal>
    </div>
  )
}

export default FormWrapper
