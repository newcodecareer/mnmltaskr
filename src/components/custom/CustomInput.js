import React from 'react'
import { Input, Label, Dropdown } from 'semantic-ui-react'

const renderInput = (field) => {
  const { meta, type } = field
  const hasError = meta.touched && meta.error
  const options = [
    { key: 1, text: 'In person', value: 'In person', icon: 'point' },
    { key: 2, text: 'Online', value: 'Online', icon: 'world' }
  ]

  return (
    <div>
      { type === 'dropdown'
        ? <Dropdown fluid {...field}
          onChange={(param, data) => field.input.onChange(data.value)}
          value={field.input.value}
          options={options}
          selection
        />
        : <Input {...field} />
      }
      { hasError && <Label basic color='yellow' pointing='above'>{meta.error}</Label> }
    </div>
  )
}

export default renderInput
