import React, { Component } from 'react'
import { Icon, Step } from 'semantic-ui-react'

export default class StepContent extends Component {
  render () {
    const { page } = this.props

    return (
      <Step.Group fluid vertical size='mini'>
        <Step active={page === 1 && true}>
          <Icon name='info circle' />
          <Step.Content>
            <Step.Title>Details</Step.Title>
          </Step.Content>
        </Step>
        <Step active={page === 2 && true}>
          <Icon name='location arrow' />
          <Step.Content>
            <Step.Title>Location</Step.Title>
          </Step.Content>
        </Step> 
        <Step active={page === 3 && true}>
          <Icon name='money' />
          <Step.Content>
            <Step.Title>Bugdet</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    )
  }
}
