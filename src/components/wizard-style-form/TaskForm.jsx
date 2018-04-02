import React, { Component } from 'react'
import DetailsContainer from '../../containers/DetailsContainer'
import LocationContainer from '../../containers/LocationContainer'
import BudgetContainer from '../../containers/BudgetContainer'

import { Segment } from 'semantic-ui-react'

export default class TaskForm extends Component {
  render () {
    const { onSubmit, page, goToNext, goToPrev } = this.props

    return (
      <Segment piled style={{ paddingTop: '2em', paddingBottom: '2em' }}>
        {page === 1 && <DetailsContainer onSubmit={goToNext}/>}
        {page === 2 && <LocationContainer goToPrev={goToPrev} onSubmit={goToNext}/>}
        {page === 3 && <BudgetContainer goToPrev={goToPrev} onSubmit={onSubmit}/>}
      </Segment>
    )
  }
}
