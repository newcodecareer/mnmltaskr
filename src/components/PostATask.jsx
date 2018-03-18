import React, { Component } from 'react'
import { Container, Header, Checkbox, Grid } from 'semantic-ui-react'
import StepContent from './StepContent'
import StepFormContent from './StepFormContent'

export default class PostATask extends React.Component {
  render() {
    return (
      <div>
        <Header>POST A TASK</Header>
        <Grid>
          <Grid.Column width={4}>
            <StepContent />
          </Grid.Column>
          <Grid.Column width={8}>
            <StepFormContent />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
