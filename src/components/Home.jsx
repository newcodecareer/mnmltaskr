import React from 'react'
import { Header, Image, Label, Container } from 'semantic-ui-react'

const Home = (props) => (
  <div>
    <Container text>
      <Header size='huge'>
        Hello, friend.
        Welcome to <i style={{ color: 'blue' }}>mnmltaskr</i>!
      </Header>
    </Container>
    <Image centered fluid src='/images/home.gif' />
    <Label size='mini' attached='bottom right'>Photo stolen from
      <a href='https://www.airtasker.com/'> https://www.airtasker.com/</a>
    </Label>
  </div>
)

export default Home
