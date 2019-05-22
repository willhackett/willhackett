import React from 'react'
import Container from '../components/Container'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
`

const SectionTitle = styled.div`
  svg {
    width: 5rem;
  }
`

const SectionSubTitle = styled.div`
  font-size: 4rem;
`

const MadeBy = () => (
  <Container>
    <Flex>
      <SectionTitle>
        <h1>Made by Will</h1>
      </SectionTitle>
      <SectionSubTitle>
        <h2>Unique creative digital experiences and experiments.</h2>
      </SectionSubTitle>
    </Flex>
  </Container>
)

export default MadeBy