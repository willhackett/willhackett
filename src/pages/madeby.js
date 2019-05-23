import React from 'react'
import FluidContainer from '../components/FluidContainer'
import styled from 'styled-components'
import MadeByLogo from '../components/MadeByLogo'
import breakpoints from '../components/breakpoints'

const Flex = styled.div`
  display: flex;
  
  flex-direction: column;
  ${breakpoints.lg} {
    flex-direction: row;
  }
`

const SectionTitle = styled.div`
  svg {
    width: 20rem;
  }
`

const SectionSubTitle = styled.div`
  font-size: 4rem;
  padding-left: 4rem;
  
`

const MadeBy = () => (
  <FluidContainer top="6rem">
    <Flex>
      <SectionTitle>
        <MadeByLogo size={20} />
      </SectionTitle>
      <SectionSubTitle>
        <div>
          <h2>Unique creative digital experiences and experiments.</h2>
        </div>
      </SectionSubTitle>
    </Flex>
  </FluidContainer>
)

export default MadeBy