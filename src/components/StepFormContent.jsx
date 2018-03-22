import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import Details from './form-contents/Details'
import Location from './form-contents/Location'
import Budget from './form-contents//Budget'

export default class StepFormContent extends React.Component {
  render() {
    return (
      <Form>
        <Segment piled>
          <Switch>
            <Route exact path='/post-a-task/' component={Details} />
            <Route path='/post-a-task/details' component={Details} />
            <Route path='/post-a-task/location' component={Location} />
            <Route path='/post-a-task/budget' component={Budget} />
          </Switch>
        </Segment>
      </Form>
    )
  }
}
