import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Flex, styled } from 'reakit';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import numeral from 'numeral';
import moment from 'moment';

import seek from '../img/logos/seek.png';
import openclub from '../img/logos/openclub.png';
import firelabs from '../img/logos/firelabs.png';
import bmwgroup from '../img/logos/bmwgroup.png';
import localz from '../img/logos/localz.png';
import innowell from '../img/logos/innowell.png';
import enablo from '../img/logos/enablo.png';
import expedia from '../img/logos/expedia.png';

import breakpoints from '../components/breakpoints';

import db from '../modules/db';

const Hero = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7rem auto;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
  }
`;

const HeroLeft = styled('div')`
  max-width: auto;
  ${breakpoints.md} {
    max-width: 40%;
  }
`;

const HeroRight = styled('div')`
  max-width: auto;
  ${breakpoints.md} {
    max-width: 50%;
  }
`;

const H1 = styled('h1')`
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 600;
`;

const H2 = styled('h2')`
  font-size: 2rem;
`;

const Spacer = styled('span')`
  display: block;
  width: 3.5rem;
  height: 0.5rem;
  background-color: ${props => props.theme.linkColor};
`;

const ImageContainer = styled('div')`
  max-width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  ${breakpoints.md} {
    max-width: 12.5%;
    height: 4rem;
  }
`;

const Logos = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  ${breakpoints.md} {
    flex-wrap: nowrap;
  }
`;

const Image = styled('img')`
  align-self: center;
  max-width: 70%;
  max-height: 70%;
  filter: grayscale(100%);
  transition: filter 0.25s;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Statistics = styled('div')`
  margin-top: 2rem;
`;

const DaySelectorContainer = styled('div')`
  height: 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
`;

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
`;

const DayStats = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

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
`;

const Logo = ({ src, brand }) => (
  <ImageContainer>
    <Image src={src} title={brand} alt={brand} />
  </ImageContainer>
);

const logos = [
  { src: seek, brand: 'Seek' },
  { src: openclub, brand: 'OpenClub' },
  { src: firelabs, brand: 'Firelabs' },
  { src: bmwgroup, brand: 'BMW Group' },
  { src: localz, brand: 'Localz' },
  { src: innowell, brand: 'InnoWell' },
  { src: enablo, brand: 'Enablo' },
  { src: expedia, brand: 'Expedia' }
];

const NowPlayingImg = styled('img')`
  width: 2rem;
  height: 2rem;
  border-radus: 8px;
  margin-right: 0.2rem;
`;

const NowPlaying = ({ now_playing: { is_playing, item = {} } = {} }) => (
  <IndividualStat>
    <h3>now playing {is_playing ? '▶️' : '⏸'}</h3>
    <span>
      <NowPlayingImg src={get(item, 'album.images[0].url', '/dummy')} />
      <small>
        {item.name} by {get(item, 'artists[0].name', '')}
      </small>
    </span>
  </IndividualStat>
);

const Stats = ({
  home,
  home: { now_playing, attributes } = {},
  setDay,
  selected_day
}) => {
  if (isEmpty(home)) return null;

  console.log(home);

  const attrs = [
    'heartrate',
    'location_name',
    'steps',
    'tracks',
    'weather_summary',
    'weather_temp_max',
    'weather_temp_min'
  ];

  const today = {};
  attrs.forEach(a => (today[a] = get(attributes, `${a}[${selected_day}]`, {})));

  console.log(today);

  const formatted = {
    date: today.heartrate.date,
    heartrate: numeral(today.heartrate.value).format('0'),
    steps: numeral(today.steps.value).format('0,0'),
    tracks: numeral(today.tracks.value).format('0'),
    location_name: today.location_name.value || 'unknown',
    weather_temp_max: numeral(today.weather_temp_max.value).format('0º'),
    weather_summary: today.weather_summary.value || 'unknown'
  };

  return (
    <Statistics>
      <DaySelectorContainer>
        <h2>
          {formatted.date === moment().format('YYYY-MM-DD')
            ? 'Today'
            : moment(formatted.date).fromNow()}
        </h2>
        <DaySelectorButton
          onClick={() => setDay(1)}
          disabled={selected_day === 4}
        >
          <i className="fa fa-chevron-left" />
        </DaySelectorButton>
        <DaySelectorButton
          onClick={() => setDay(-1)}
          disabled={selected_day === 0}
        >
          <i className="fa fa-chevron-right" />
        </DaySelectorButton>
      </DaySelectorContainer>
      <DayStats>
        {/* Steps */}
        <IndividualStat>
          <h3>steps</h3>
          <span>
            {formatted.steps}
            <small> today</small>
          </span>
        </IndividualStat>
        {/* Heartrate */}
        <IndividualStat>
          <h3>heartrate</h3>
          <span>
            {formatted.heartrate}
            <small> bpm avg.</small>
          </span>
        </IndividualStat>
        {/* Media */}
        <IndividualStat>
          <h3>music</h3>
          <span>
            {formatted.tracks}
            <small> tracks played</small>
          </span>
        </IndividualStat>
        {/* Now playing */}
        <NowPlaying now_playing={now_playing} />
        {/* Location */}
        <IndividualStat>
          <h3>location</h3>
          <span>{formatted.location_name}</span>
        </IndividualStat>
        {/* Weather */}
        <IndividualStat>
          <h3>weather</h3>
          <span>
            {formatted.weather_temp_max}
            <small>C - {formatted.weather_summary}</small>
          </span>
        </IndividualStat>
      </DayStats>
    </Statistics>
  );
};

class Index extends Component {
  state = {
    selected_day: 0,
    home: {}
  };
  componentWillMount() {
    db.bindToState('home', {
      context: this,
      state: 'home'
    });
  }
  setDay = modifier => {
    const { selected_day } = this.state;
    const nextState = selected_day + modifier;
    if (nextState >= 0 && nextState < 4) {
      this.setState({ selected_day: nextState });
    }
  };
  render() {
    const { home, selected_day } = this.state;

    return (
      <Fragment>
        <Hero>
          <HeroLeft>
            <H1>
              Will
              <br />
              Hackett
            </H1>
            <Spacer />
            <H2>I build digital products &amp; experiences.</H2>
          </HeroLeft>
        </Hero>
        <Logos>
          {logos.map(logo => (
            <Logo key={logo.brand} src={logo.src} brand={logo.brand} />
          ))}
        </Logos>
        <Stats home={home} setDay={this.setDay} selected_day={selected_day} />
      </Fragment>
    );
  }
}

export default connect()(Index);
