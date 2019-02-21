import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Flex, styled } from 'reakit'

import seek from '../img/logos/seek.png'
import openclub from '../img/logos/openclub.png'
import firelabs from '../img/logos/firelabs.png'
import bmwgroup from '../img/logos/bmwgroup.png'
import localz from '../img/logos/localz.png'
import innowell from '../img/logos/innowell.png'
import enablo from '../img/logos/enablo.png'
import expedia from '../img/logos/expedia.png'

import breakpoints from '../components/breakpoints';

const Hero = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7rem auto;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
  }
`

const HeroLeft = styled('div')`
  max-width: auto;
  ${breakpoints.md} {
    max-width: 40%;
  }
`

const HeroRight = styled('div')`
  max-width: auto;
  ${breakpoints.md} {
    max-width: 50%;
  }
`

const H1 = styled('h1')`
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 600;
`

const H2 = styled('h2')`
  font-size: 2rem;
`

const Spacer = styled('span')`
  display: block;
  width: 3.5rem;
  height: 0.5rem;
  background-color: ${props => props.theme.linkColor}
`

const ImageContainer = styled('div')`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  ${breakpoints.md} {
    width: 25%;
    height: 4rem;
  }
`

const Image = styled('img')`
  align-self: center;
  max-width: 70%;
  max-height: 70%;
  filter: grayscale(100%);
`

const Statistics = styled('div')`
  margin-top: 2rem;
`

const DaySelectorContainer = styled('div')`
  height: 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
`

const DaySelectorButton = styled('button')`
  background: #f3f3f3;
  border: none;
  border-radius: 100%;
  width: 1.75rem;
  height: 1.75rem;
  margin: auto 0.2rem;
  transition: background 0.25s;
  cursor: pointer;
  &:hover:enabled {
    background: #dadada;
  }
`

const DayStats = styled('div')`
  display: flex;
  flex-wrap: wrap;
`

const IndividualStat = styled('div')`
  padding: 1rem;
  width: calc(50% - 2rem);
  ${breakpoints.md} {
    width: calc(25% - 2rem);
  }
  h3 {
    font-size: 1.25rem;
    line-height: 1rem;
    margin: 0;
  }
  span {
    font-size: 2rem;
    small {
      font-size: 1rem;
    }
  }
`

const Logo = ({ src, brand }) => (
  <ImageContainer>
    <Image
      src={src}
      title={brand}
      alt={brand}
    />
  </ImageContainer>
)

const logos = [
  { src: seek, brand: 'Seek' },
  { src: openclub, brand: 'OpenClub' },
  { src: firelabs, brand: 'Firelabs' },
  { src: bmwgroup, brand: 'BMW Group' },
  { src: localz, brand: 'Localz' },
  { src: innowell, brand: 'InnoWell' },
  { src: enablo, brand: 'Enablo' },
  { src: expedia, brand: 'Expedia' },
]

const Index = () => (
  <Fragment>
    <Hero>
      <HeroLeft>
        <H1>Will<br/>Hackett</H1>
        <Spacer />
        <H2>I build digital products &amp; experiences.</H2>
      </HeroLeft>
      <HeroRight>
        <Flex flexWrap="wrap">
          {logos.map(logo => <Logo key={logo.brand} src={logo.src} brand={logo.brand} />)}
        </Flex>
      </HeroRight>
    </Hero>
    <Statistics>
      <DaySelectorContainer>
        <h2>Today</h2>
        <DaySelectorButton><i className="fa fa-chevron-left" /></DaySelectorButton>
        <DaySelectorButton><i className="fa fa-chevron-right" /></DaySelectorButton>
      </DaySelectorContainer>
      <DayStats>
        {/* Steps */}
        <IndividualStat>
          <h3>steps</h3>
          <span>
            2,219<small> of 4,520</small>
          </span>
        </IndividualStat>
        {/* Heartrate */}
        <IndividualStat>
          <h3>heartrate</h3>
          <span>
            67<small> bpm avg.</small>
          </span>
        </IndividualStat>
        {/* Media */}
        <IndividualStat>
          <h3>music</h3>
          <span>
            13<small> tracks played</small>
          </span>
        </IndividualStat>
        {/* Now playing */}
        <IndividualStat>
          <h3>now playing</h3>
          <span>
            <img src={'abc'} />
            <small>Some Songby Potato</small>
          </span>
        </IndividualStat>
        {/* Location */}
        <IndividualStat>
          <h3>location</h3>
          <span>
            melbourne
          </span>
        </IndividualStat>
        {/* Weather */}
        <IndividualStat>
          <h3>weather</h3>
          <span>
            20º
            <small>
              C - mostly cloudy
            </small>
          </span>
        </IndividualStat>
      </DayStats>
    </Statistics>
  </Fragment>
)

export default connect()(Index)