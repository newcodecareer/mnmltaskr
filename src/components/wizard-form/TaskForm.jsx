import React from 'react'
import { Segment } from 'semantic-ui-react'

import DetailsContainer from '../../containers/DetailsContainer'
import LocationContainer from '../../containers/LocationContainer'
import BudgetContainer from '../../containers/BudgetContainer'

const TaskForm = (props) => {
  const { onSubmit, page, goToNext, goToPrev } = props

  return (
    <Segment piled style={{ paddingTop: '2em', paddingBottom: '2em' }}>
      {page === 1 && <DetailsContainer onSubmit={goToNext}/>}
      {page === 2 && <LocationContainer goToPrev={goToPrev} onSubmit={goToNext}/>}
      {page === 3 && <BudgetContainer goToPrev={goToPrev} onSubmit={onSubmit}/>}
    </Segment>
  )
}

export default TaskForm
