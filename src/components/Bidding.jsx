import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { Divider, Modal, Segment, Icon,
  Form, Input, Header, TextArea, Button } from 'semantic-ui-react'
import solveFees from './custom/FeeSolver'

const renderInput = (field) => (
  <Input
    {...field}
    label='&#8369;'
    size='big'
  />
)

const renderTextArea = (field) => (
  <TextArea
    {...field.input}
    rows='10'
    placeholder='
      e.g. I will be great for this task.
      I have the necessarcy experience,
      skills and equipment required
      to get this done
    '
  />
)

const renderFees = (offer) => {
  const { fee, profit } = solveFees(offer)
  return (
    <div style={{ marginTop: '1em' }}>
      <i>
        You will receive &#8369; {fee}
        <div style={{ padding: '3px' }} />
        mnmltaskr fee of &#8369; {profit}
      </i>
    </div>
  )
}

const Bidding = (props) => {
  const { offer, handleSubmit, initialValues } = props
  const title = initialValues.title

  return (
    <Modal open basic size='mini'>
      <Segment vertical>
        <Header inverted
          textAlign='center'
          style={{ margin: '3pt' }}
        >
          {title}
        </Header>
        <Divider inverted
          content='make an offer'
          horizontal
          style={{
            marginTop: '0em',
            marginBottom: '2em'
          }}
        />
        <Form inverted onSubmit={handleSubmit}>
          <Form.Field>
            <label>How much?</label>
            <Field
              name='offer'
              type='number'
              component={renderInput}
            />
            {offer && renderFees(offer)}
          </Form.Field>
          <Divider inverted />
          <Form.Field>
            <label>Why are you the best person for this task?</label>
            <Field
              name='reason'
              component={renderTextArea}
            />
          </Form.Field>
          <Divider />
          <Button
            as={Link}
            to='/browse-tasks'
            icon circular
            basic inverted
          >
            <Icon name='arrow left' />
          </Button>
          <Button
            type='submit'
            floated='right'
            circular
          >
            Continue
          </Button>
        </Form>
      </Segment>
    </Modal>
  )
}

export default Bidding
