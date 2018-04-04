import React, { Component } from 'react'
import { Form, Button, Icon, TextArea, Popup } from 'semantic-ui-react'
import { Field } from 'redux-form'

const renderTextArea = (field) => (
  <TextArea
    {...field.input}
    placeholder='e.g. Clean my apartment from top to bottom...'
  />
)

export default class Details extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <Form as='form' onSubmit={handleSubmit}>
        <Form.Field>
          <label>
            Task title
            <Popup
              trigger={<Icon
                style={{ paddingLeft: '1em' }}
                name='info circle'
              />}
              content='
                Briefly tell us what you need done
                e.g. Handyman to fix door
              '
              on='hover'
            />
          </label>
          <Field
            name='title'
            component='input'
            placeholder='e.g. Clean my 2 bedroom apartment'
            type='text'
          />
        </Form.Field>
        <Form.Field>
          <label>
              Describe your task in more detail
            <Popup
              trigger={<Icon
                style={{ paddingLeft: '1em' }}
                name='info circle'
              />}
              content='
                  Detail exactly what you need done
                  to get more offers. What skills are
                  needed? Is equipment provided?
                  How long will it take?
                '
              on='hover'
            />
          </label>
          <div style={{
            marginBottom: '2ex',
            color: 'grey'
          }}>
            For your safety, please do not
            share personal information,
            e.g., email, phone or address.
          </div>
          <Field
            name='description'
            component={renderTextArea}
          />
        </Form.Field>
        <Button floated='right' type='submit' animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </Form>
    )
  }
}
