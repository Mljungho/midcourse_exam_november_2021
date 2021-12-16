import React from 'react'
import Header from './components/Title'
import GHSearch from './components/GHSearch'
import { Container } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch


  return (
    <Container>
      <section name="title">
        <Header />
      </section>
      <section name="main">
        <GHSearch/>
      </section>
    </Container>
  )
}

export default App
