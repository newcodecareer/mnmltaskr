import React from 'react'
import { Icon, Card, Header, Image, Grid, List, Label, Button, Container, Segment } from 'semantic-ui-react'
import ReactSwipe from 'react-swipe'

const services = [
  { src: 'handyman.jpg', title: 'Handyman Services' },
  { src: 'gardening.jpg', title: 'Garden Maintenance' },
  { src: 'pickup.jpg', title: 'Pickup & Delivery' },
  { src: 'cleaning.jpg', title: 'House Cleaning' },
  { src: 'moving.jpg', title: 'Moving & Removalist' },
  { src: 'ikea.jpg', title: 'Furniture Assembly' },
  { src: 'it.jpg', title: 'Computer & IT Support' },
  { src: 'flyers.jpg', title: 'Flyer Delivery' }
]

const processes = [
  { src: 'one.png', title: 'Post your task', desc: 'Tell us what you need. It is free to post.' },
  { src: 'two.png', title: 'Review offers', desc: 'Receive offers from trusted taskers.' },
  { src: 'three.png', title: 'Get more done', desc: 'Choose the right person for the task and get more done.' }
]

const abouts = [
  'Inventore',
  'Veritatis',
  'Laborum',
  'Consequatur'
]

const Home = (props) => (
  <div>
    <Segment vertical
      style={{
        border: 'none',
        paddingTop: '3rem',
        paddingBottom: '0rem'
      }}
    >
      <ReactSwipe swipeOptions={{ auto: 3000 }}>
        <Image centered fluid src='/images/header.png' />
        <Image centered fluid src='/images/hr.jpg' />
        <Image centered fluid src='/images/hr1.jpg' />
        <Image centered fluid src='/images/hr2.jpg' />
        {/* <Image centered fluid src='/images/hr3.jpg' /> */}
        <Image centered fluid src='/images/hr4.jpg' />
      </ReactSwipe>
      <Label size='mini' attached='bottom right'>Photos stolen from
        <a href='https://www.airtasker.com/'> https://www.airtasker.com/</a>
      </Label>
    </Segment>
    <Segment vertical
      style={{
        backgroundColor: '#f5f9fb',
        paddingBottom: '7em'
      }}
    >
      <Container textAlign='center'>
        <Header size='large'
          style={{
            marginTop: '1.25rem',
            marginBottom: '0rem'
          }}
        >What do you need done?
        </Header>
        <Button
          animated='vertical'
          style={{
            border: 'none',
            background: '#f5f9fb',
            paddingTop: '0rem'
          }}
        >
          <Button.Content visible>
            <Icon size='big' name='angle down' />
          </Button.Content>
          <Button.Content hidden>
            <Icon size='big' name='angle double down' />
          </Button.Content>
        </Button>
        <Card.Group centered>
          {
            services.map((service) => (
              <Card as='a' key={service.src}>
                <Image src={`/images/services/${service.src}`} />
                <Card.Header>{service.title}</Card.Header>
              </Card>
            ))
          }
        </Card.Group>
      </Container>
    </Segment>
    <Segment vertical
      style={{
        // backgroundImage: 'linear-gradient(0deg,#11c9e1 25%,#0798bf)',
        backgroundColor: '#0798bf',
        paddingTop: '8em',
        paddingBottom: '8em'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Header inverted textAlign='center'>
          <Header.Content>What is Mnmltaskr?</Header.Content>
          <Header.Subheader>
            <div style={{ marginTop: '1em' }}>
              Mnmltaskr is a consequatur tempore. Ipsum ut laboriosam sit iure.
              Modi hic odio quidem. Sequi nisi eum voluptas cum facere iusto vel.
              <br />
              Blanditiis consequatur officia recusandae commodi voluptates omnis.
            </div>
          </Header.Subheader>
        </Header>
      </div>
      <Grid container
        stackable
        centered columns={3}
        style={{ marginTop: '1em' }}
      >
        {
          processes.map((process) => (
            <Grid.Column key={`${process.src}uniqko`}>
              <Image centered src={`/images/processes/${process.src}`} />
              <div style={{
                textAlign: 'center',
                color: 'whitesmoke'
              }}
              >
                <div style={{ fontSize: '13pt' }}>
                  {process.title}
                </div>
                <div>{process.desc}</div>
              </div>
            </Grid.Column>
          ))
        }
      </Grid>
    </Segment>
    <Segment vertical
      inverted
      style={{
        backgroundColor: '#3A3D3E',
        paddingTop: '3em',
        paddingBottom: '3em'
      }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                {
                  abouts.map((about, index) => (
                    <List.Item key={about + index} as='a'>{about}</List.Item>
                  ))
                }
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                {
                  abouts.map((about, index) => (
                    <List.Item key={about + index} as='a'>{about}</List.Item>
                  ))
                }
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                <Icon name='tasks' />
                Mnmltaskr // Ronna Mae Firmo, 2018
              </Header>
              <p>
                Velit voluptas eligendi voluptatem quisquam alias.
                Culpa enim sint nulla ut nostrum.
                Qui omnis vitae sapiente harum numquam suscipit.
                Qui explicabo asperiores sed modi fuga.
                Omnis optio id voluptatibus voluptas corporis eaque quibusdam.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default Home
