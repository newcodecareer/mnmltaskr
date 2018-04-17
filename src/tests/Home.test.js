import React from 'react'
// import './localStorageMock'
import { shallow } from './setup'
import Home from '../components/Home'
import { List, Grid, Segment, Image, Label, Container, Header, Button, Icon, Card } from 'semantic-ui-react'
import ReactSwipe from 'react-swipe'

let wrapper

describe('<Index />', () => {
  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  it('renders itself', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('renders <Segment>', () => {
    expect(wrapper.find(Segment).length).toBeGreaterThan(0)
  })

  it('renders <ReactSwipe>', () => {
    expect(wrapper.find(ReactSwipe).length).toBeGreaterThan(0)
  })

  it('renders <Image>', () => {
    expect(wrapper.find(Image).length).toBeGreaterThan(0)
  })

  it('renders <Label>', () => {
    expect(wrapper.find(Label).length).toBeGreaterThan(0)
  })

  it('renders <Container>', () => {
    expect(wrapper.find(Container).length).toBeGreaterThan(0)
  })

  it('renders <Header>', () => {
    expect(wrapper.find(Header).length).toBeGreaterThan(0)
  })

  it('renders <Button>', () => {
    expect(wrapper.find(Button).length).toBeGreaterThan(0)
  })

  it('renders <Button.Content>', () => {
    expect(wrapper.find(Button.Content).length).toBeGreaterThan(0)
  })

  it('renders <Icon>', () => {
    expect(wrapper.find(Icon).length).toBeGreaterThan(0)
  })

  it('renders <Card.Group>', () => {
    expect(wrapper.find(Card.Group).length).toBeGreaterThan(0)
  })

  it('renders <Card>', () => {
    expect(wrapper.find(Card).length).toBeGreaterThan(0)
  })

  it('renders <Card.Header>', () => {
    expect(wrapper.find(Card.Header).length).toBeGreaterThan(0)
  })

  it('renders <Header.Content>', () => {
    expect(wrapper.find(Header.Content).length).toBeGreaterThan(0)
  })

  it('renders <Header.Subheader>', () => {
    expect(wrapper.find(Header.Subheader).length).toBeGreaterThan(0)
  })

  it('renders <Grid>', () => {
    expect(wrapper.find(Grid).length).toBeGreaterThan(0)
  })

  it('renders <Grid.Column>', () => {
    expect(wrapper.find(Grid.Column).length).toBeGreaterThan(0)
  })

  it('renders <Grid.Row>', () => {
    expect(wrapper.find(Grid.Row).length).toBeGreaterThan(0)
  })

  it('renders <List>', () => {
    expect(wrapper.find(List).length).toBeGreaterThan(0)
  })

  it('renders <List.Item>', () => {
    expect(wrapper.find(List.Item).length).toBeGreaterThan(0)
  })
})
