import React from 'react'
import { shallow } from './setup'
import PostATask from '../components/menu/PostATask'
import WizardContainer from '../containers/WizardContainer'
import StepContainer from '../containers/StepContainer'
import { Container, Segment, Header } from 'semantic-ui-react'

let wrapper
describe('<PostATask />', () => {
  beforeEach(() => {
    wrapper = shallow(<PostATask />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <WizardContainer>', () => {
    expect(wrapper.find(WizardContainer)).toHaveLength(1)
  })

  it('renders <StepContainer>', () => {
    expect(wrapper.find(StepContainer)).toHaveLength(1)
  })

  it('renders <Container>', () => {
    expect(wrapper.find(Container)).toHaveLength(1)
  })

  it('renders <Segment>', () => {
    expect(wrapper.find(Segment)).toHaveLength(1)
  })

  it('renders <Header>', () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  })
})
