import React from 'react'
import { Form, Input, Button, Dropdown } from 'semantic-ui-react'
import { Field } from 'redux-form'

const typeOptions = [
  { key: 1, text: 'In person', value: 'In person', icon: 'point' },
  { key: 2, text: 'Online', value: 'Online', icon: 'world' }
]

const availabilityOptions = [
  { key: 1, text: 'Available', value: 'open' },
  { key: 2, text: 'Closed', value: 'closed' }
]

const renderDropdown = (field) => (
  <Dropdown {...field}
    style={{ marginRight: '2pt' }}
    onChange={(param, data) => field.input.onChange(data.value)}
    value={field.input.value}
    options={field.options}
    selection
  />
)

const TaskFilters = (props) => {
  const { handleSubmit, submitting, pristine } = props

  return (
    <Form style={{ paddingBottom: '2rem' }} loading={submitting} onSubmit={handleSubmit}>
      <Form.Group>
        <Field name='type'
          placeholder='Type of task'
          options={typeOptions}
          component={renderDropdown}
        />
        <Field name='availability'
          placeholder='Availability'
          options={availabilityOptions}
          component={renderDropdown}
        />
        <Input>
          <Field name='title'
            placeholder='Enter task title'
            type='text'
            component='input'
          />
          <Button type='submit' disabled={submitting || pristine}>Search</Button>
        </Input>
      </Form.Group>
      <div style={{ color: 'grey' }}>*filters don&apos;t work yet</div>
    </Form>
  )
}

export default TaskFilters
