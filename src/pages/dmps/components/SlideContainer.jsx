import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../../components/breakpoints'

const SlideContainerRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  height: 100%;
`

const SlideContainerInner = styled.main`
  display: flex;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
  }
`

const Aside = styled.div`
  flex: 1 0 50%;
  align-items: center;
  justify-content: center;
`

const SlideContainer = ({ setSlide, slide, left, right }) => (
  <SlideContainerRoot>
    <SlideContainerInner>
      <Aside>{left}</Aside>
      <Aside>{right}</Aside>
    </SlideContainerInner>
  </SlideContainerRoot>
)

export default SlideContainer
