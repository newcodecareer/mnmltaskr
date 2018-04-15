import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'
import CustomField from './CustomField'

const Location = (props) => {
  const { handleSubmit, goToPrev, type } = props

  return (
    <Form as='form' onSubmit={handleSubmit}>
      <CustomField
        title='Where would the task be completed?'
        info={
          <div>
            <Icon name='point' />
            <b>In person</b>
            <br />
            Select this if you need the person there
            <br />
            <Icon name='world' />
            <b>Online</b>
            <br />
            Select this if they can work from anywhere
          </div>
        }
        name='type'
        type='dropdown'
        placeholder='Type of task'
      />
      { type === 'In person' &&
        <CustomField
          title='Location'
          name='location'
          type='text'
          placeholder='Enter a place'
        />
      }
      <CustomField
        title='Due date'
        name='due'
        type='date'
      />
      <Button.Group floated='right'>
        <Button onClick={goToPrev} animated>
          <Button.Content visible>Previous</Button.Content>
          <Button.Content hidden>
            <Icon name='left arrow' />
          </Button.Content>
        </Button>
        <Button.Or />
        <Button type='submit' animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </Button.Group>
    </Form>
  )
}

export default Location
