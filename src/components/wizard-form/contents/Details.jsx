import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'
import CustomField from '../../custom/CustomField'

const Details = (props) => {
  const { handleSubmit } = props

  return (
    <Form as='form' onSubmit={handleSubmit}>
      <CustomField
        title='Task title'
        info='Briefly tell us what you need done e.g. Handyman to fix door'
        name='title'
        type='text'
        placeholder='e.g. Clean my 2 bedroom apartment'
      />
      <CustomField
        title='Describe our task in more detail'
        info='Detail exactly what you need done to get more offers. What skills are needed? Is equipment provided? How long will it take?'
        name='desc'
        type='textarea'
        placeholder='e.g. Clean my apartment from top to bottom...'
      ><div style={{ marginBottom: '2ex', color: 'grey' }}>
          For your safety, please do not share personal information, e.g., email, phone or address.
        </div>
      </CustomField>
      <Button floated='right' type='submit' animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>
    </Form>
  )
}

export default Details
