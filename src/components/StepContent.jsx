import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Step } from 'semantic-ui-react'

export default class StepContent extends React.Component {
  render() {
    return (
      <Step.Group fluid vertical size='mini'>
        <Step as={Link} to='/post-a-task/details'>
          <Icon name='info circle' />
          <Step.Content>
            <Step.Title>Details</Step.Title>
          </Step.Content>
        </Step>
        <Step as={Link} to='/post-a-task/location'>
          <Icon name='location arrow' />
          <Step.Content>
            <Step.Title>Location</Step.Title>
          </Step.Content>
        </Step> 
        <Step as={Link} to='/post-a-task/budget'>
          <Icon name='money' />
          <Step.Content>
            <Step.Title>Bugdet</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}
