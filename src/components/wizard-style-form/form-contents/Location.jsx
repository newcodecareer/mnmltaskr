import React from 'react'
import { Form, Button, Dropdown, Icon, Popup } from 'semantic-ui-react'
import { Field } from 'redux-form'

const options = [
  { key: 1, text: 'In person', value: 'In person', icon: 'point' },
  { key: 2, text: 'Online', value: 'Online', icon: 'world' }
]

const renderDropdown = (field) => (
  <Dropdown
    {...field.input}
    onChange={(param, data) => field.input.onChange(data.value)}
    value={field.input.value}
    placeholder='Type of task'
    options={options}
    selection
  />
)

export const Location = (props) => {
  const { handleSubmit, goToPrev, type } = props

  return (
    <Form as='form' onSubmit={handleSubmit}>
      <Form.Field>
        <label>
            Where would the task be completed?
          <Popup
            trigger={<Icon
              style={{
                paddingLeft: '1em',
                paddingRight: '2em'
              }}
              name='info circle'
            />}
            content={
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
            on='hover'
            position='right center'
          />
        </label>
        <Field
          name='type'
          component={renderDropdown}
        />
      </Form.Field>
      {
        type === 'In person' &&
        <Form.Field>
          <label>Location</label>
          <Field
            name='location'
            component='input'
            placeholder='Enter a place'
            type='text'
          />
        </Form.Field>
      }
      <Form.Field>
        <label>Due date</label>
        <Field
          name='due'
          component='input'
          type='date'
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
