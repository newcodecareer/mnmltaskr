import React from 'react'
import { Form, Popup, Icon } from 'semantic-ui-react'
import { Field } from 'redux-form'
import renderInput from './CustomInput'

const CustomField = (props) => {
  const { title, info, children, name, type,
    placeholder, isLabeled, labelPosition, labelText } = props
  const fieldData = { name, type, placeholder, component: renderInput }

  return (
    <Form.Field>
      <label>
        {title}
        { info &&
          <Popup on='hover' content={info}
            trigger={<Icon style={{ paddingLeft: '1em' }} name='info circle' />}
          />
        }
      </label>
      {children}
      { isLabeled
        ? <Field {...fieldData} labelPosition={labelPosition} label={labelText} />
        : <Field {...fieldData} />
      }
    </Form.Field>
  )
}

export default CustomField
