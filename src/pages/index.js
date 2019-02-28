import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { styled } from 'reakit';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import numeral from 'numeral';

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
  margin: 4rem auto;
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

const H1 = styled('h1')`
  font-size: 4rem;
  line-height: 3.5rem;
  font-weight: 800;
`;

const H2 = styled('h2')`
  font-size: 2rem;
  font-weight: 400;
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
    // height: 4rem;
  }
`;

const Logos = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 4rem 0;
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
  margin: 4rem auto;
`;

const DaySelectorContainer = styled('div')`
  height: 2rem;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 1rem auto;
`;

const DayStats = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const IndividualStat = styled('div')`
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin: 0.5rem 0;
  ${breakpoints.md} {
    width: 50%;
  }
  ${breakpoints.lg} {
    width: 33%;
  }
  ${breakpoints.xl} {
    width: 25%;
  }
  h3 {
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 200;
    margin: 0;
  }
  span {
    font-size: 3rem;
    line-height: 3rem;
    small {
      font-size: 1rem;
    }
  }
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
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
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 4px;
  margin-right: 0.2rem;
`;

const NowPlayingContainer = styled('span')`
  display: flex;
  height: 2.6rem;
  align-items: flex-end;
  span {
    line-height: 1rem;
    font-size: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 1rem;
    small {
      font-size: 0.75rem;
    }
  }
`;

const NowPlaying = ({
  formatted,
  now_playing: { is_playing, item = {} } = {}
}) => (
  <IndividualStat>
    <h3>
      <i className="fa fa-music" /> music
    </h3>
    {!item ? (
      <span>
        {formatted.tracks}
        <small> tracks played</small>
      </span>
    ) : (
      <span>
        <NowPlayingContainer>
          <NowPlayingImg src={get(item, 'album.images[0].url', '/dummy')} />
          <span>
            {item.name}
            <br />
            <small>{(item.artists || []).map(a => a.name).join(', ')}.</small>
          </span>
        </NowPlayingContainer>
      </span>
    )}
  </IndividualStat>
);

const BasicStat = ({ icon, stat, unit, value }) => (
  <IndividualStat>
    <h3>
      <i className={`fa fa-${icon}`} /> {stat}
    </h3>
    <span>
      {value}
      <small> {unit}</small>
    </span>
  </IndividualStat>
);

const trackers = [
  { id: 'steps', icon: 'shoe-prints', stat: 'steps', unit: 'steps' },
  { id: 'floors', icon: 'hiking', stat: 'floors', unit: 'climbed' },
  { id: 'heartrate', icon: 'heartbroken', stat: 'heartrate', unit: 'bpm' },
  { id: 'workouts_min', icon: 'dumbbell', stat: 'workouts', unit: 'mins' },
  { id: 'water', icon: 'tint', stat: 'water', unit: 'mL' },
  { id: 'caffeine', icon: 'coffee', stat: 'caffeine', unit: 'mg' }
];

const Stats = ({ home, home: { now_playing, attributes } = {} }) => {
  if (isEmpty(home)) return null;

  const attrs = Object.keys(attributes);

  const today = {};
  attrs.forEach(a => (today[a] = get(attributes, `${a}[0]`, {})));

  const formatted = {
    location_name: today.location_name.value || 'unknown',
    weather_temp_max: numeral(today.weather_temp_max.value).format('0'),
    weather_temp_min: numeral(today.weather_temp_min.value).format('0.0')
  };

  trackers.forEach(tracker => {
    formatted[tracker.id] = numeral(
      get(today, `${tracker.id}.value`, 0)
    ).format(tracker.format || '0');
  });

  return (
    <Statistics>
      <DaySelectorContainer>
        <h2>Today in data</h2>
      </DaySelectorContainer>
      <DayStats>
        {/* Location */}
        <IndividualStat>
          <h3>
            <i className="fa fa-globe-asia" /> current location
          </h3>
          <span>{formatted.location_name}</span>
        </IndividualStat>
        {/* Now playing */}
        <NowPlaying now_playing={now_playing} formatted={formatted} />
        {/* Weather */}
        <IndividualStat>
          <h3>
            <i className="fa fa-sun" /> weather
          </h3>
          <span>
            {formatted.weather_temp_max}º
            <small>C / {formatted.weather_temp_min}º</small>
          </span>
        </IndividualStat>
        {trackers.map(({ id, ...rest }) => (
          <BasicStat key={id} value={formatted[id]} {...rest} />
        ))}
      </DayStats>
    </Statistics>
  );
};

class Index extends Component {
  state = {
    home: {}
  };
  componentDidMount() {
    db.bindToState('home', {
      context: this,
      state: 'home'
    });
  }
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
