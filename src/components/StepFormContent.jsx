import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import WizardContainer from '../containers/WizardContainer'
import DetailsContainer from '../containers/DetailsContainer'
import LocationContainer from '../containers/LocationContainer'
import BudgetContainer from '../containers/BudgetContainer'

import showResult from './showResult'

export default class StepFormContent extends React.Component {
  render() {
    return (
      <Segment piled style={{ paddingTop: '2em' }}>
        <Switch>
          <Route exact path='/post-a-task/' render={() => (
              <WizardContainer onSubmit={showResult}/>
            )} 
          />
          <Route path='/post-a-task/details' component={DetailsContainer} />
          <Route path='/post-a-task/location' component={LocationContainer} />
          <Route path='/post-a-task/budget' component={BudgetContainer} />
        </Switch>
      </Segment>
    )
  }
}
