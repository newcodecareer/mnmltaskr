import React from 'react'
import { Form, Button, Icon, Label, Input, Popup } from 'semantic-ui-react'
import { Field } from 'redux-form'

const Budget = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    goToPrev
  } = props

  return (
    <Form as='form' onSubmit={handleSubmit}>
      <Form.Field>
        <label>
              How many people do you need for your task?
          <Popup
            trigger={<Icon
              style={{ paddingLeft: '1em' }}
              name='info circle'
            />}
            content='
                If you need more hands, you can
                have up to 20 Taskers complete
                your task.
              '
            on='hover'
          />
        </label>
        <Input labelPosition='right'>
          <Field
            name='numberOfTaskers'
            component='input'
            placeholder='Number of taskers'
            type='number'
          />
          <Label>taskers</Label>
        </Input>
      </Form.Field>
      <Form.Field>
        <label>
            What is your budget?
          <Popup
            trigger={<Icon
              style={{ paddingLeft: '1em' }}
              name='info circle'
            />}
            content='
                Weigh up how long it will take and
                the skills needed. Then suggest a
                fair budget to get more offers at a
                higher quality.
              '
            on='hover'
          />
        </label>
        <Input labelPosition='left'>
          <Label>&#8369;</Label>
          <Field
            name='budget'
            component='input'
            placeholder='Amount'
            type='number'
          />
        </Input>
      </Form.Field>
      <Form.Field style={{
        color: 'grey',
        textAlign: 'right',
        paddingRight: '1em'
      }}>
        <i>What happens next?</i>
        <Popup
          trigger={<Icon
            style={{ paddingLeft: '1em' }}
            name='info circle'
          />}
          content={
            <i>
                Pretty soon you&apos;ll start getting offers
                from Taskers. Just so you know, task
                details can be changed any time
                before you accept an offer and you
                have no obligations to hire.
            </i>
          }
          on='hover'
        />
      </Form.Field>
      <Button.Group floated='right'>
        <Button onClick={goToPrev} animated>
          <Button.Content visible>Previous</Button.Content>
          <Button.Content hidden>
            <Icon name='left arrow' />
          </Button.Content>
        </Button>
        <Button.Or />
        <Button type='submit' animated
          // from the docu
          disabled={pristine || submitting}
        >
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </Button.Group>
    </Form>
  )
}

export default Budget
