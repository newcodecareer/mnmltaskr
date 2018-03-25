import React, { Component } from 'react'
import DetailsContainer from '../../containers/DetailsContainer'
import LocationContainer from '../../containers/LocationContainer'
import BudgetContainer from '../../containers/BudgetContainer'

export default class TaskForm extends React.Component {
  render() {
    const { onSubmit, page, goToNext, goToPrev } = this.props

    return (
      <div>
        {page === 1 && <DetailsContainer onSubmit={goToNext}/>}
        {page === 2 && <LocationContainer goToPrev={goToPrev} onSubmit={goToNext}/>}
        {page === 3 && <BudgetContainer goToPrev={goToPrev} onSubmit={onSubmit}/>}
      </div>
    )
  }
}
