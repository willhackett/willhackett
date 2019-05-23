import React, { Component } from 'react';
import { connect } from 'react-redux';
import { styled } from 'reakit';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import numeral from 'numeral';
import moment from 'moment-timezone';
import { Link } from 'gatsby'

import Article from '../components/Article'
import Container from '../components/Container';
import breakpoints from '../components/breakpoints';

import db from '../modules/db';

const Hero = styled('div')`
  display: flex;
  margin: 4rem auto;
  flex-direction: column;
`;

const HeroLeft = styled('div')`
  max-width: auto;
  ${breakpoints.md} {
    max-width: 40%;
  }
`;

const H1 = styled('h1')`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 800;
  margin: 2rem 0 1rem 0;
`;

const H2 = styled('h2')`
  font-size: 1rem;
  font-weight: 100;
  line-height: 1.4rem;
  max-width: 35rem;
  color: #505050;
  margin: 0;
`;

const Spacer = styled('span')`
  display: block;
  width: 3.5rem;
  height: 0.5rem;
  background-color: ${props => props.theme.linkColor};
`;

const Statistics = styled('div')`
  margin: 5.8rem auto 4rem auto;
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
  width: ${props => (props.fullWidth ? '100%' : '50%')};
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
    <IndividualStat fullWidth={true}>
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

const BasicStat = ({ icon, stat, unit, value, formatter }) =>
  value ? (
    <IndividualStat>
      <h3>
        <i className={`fa fa-${icon}`} /> {stat}
      </h3>
      <span>
        {numeral(value).format(formatter || '0,0')}
        <small> {unit}</small>
      </span>
    </IndividualStat>
  ) : null;

const trackers = [
  { id: 'steps', icon: 'shoe-prints', stat: 'steps', unit: 'steps' },
  { id: 'floors', icon: 'hiking', stat: 'floors', unit: 'climbed' },
  { id: 'heartrate', icon: 'heart-broken', stat: 'heartrate', unit: 'bpm' },
  { id: 'workouts_min', icon: 'dumbbell', stat: 'workouts', unit: 'mins' },
  { id: 'water', icon: 'tint', stat: 'water', unit: 'mL' },
  { id: 'caffeine', icon: 'coffee', stat: 'caffeine', unit: 'mg' }
];

const Stats = ({ home, home: { now_playing, attributes, id = {} } = {} }) => {
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
    formatted[tracker.id] = get(today, `${tracker.id}.value`);
  });

  return (
    <Statistics>
      <DaySelectorContainer>
        <h2>Today in data</h2>
      </DaySelectorContainer>
      <DayStats>
        {/* Location */}
        <IndividualStat fullWidth={true}>
          <h3>
            <i className="fa fa-globe-asia" /> current location
          </h3>
          <span>{formatted.location_name}</span>
        </IndividualStat>
        {/* Location */}
        <IndividualStat fullWidth={true}>
          <h3>
            <i className="fa fa-clock" /> local time
          </h3>
          <span>
            {moment
              .tz(id.timezone || 'Australia/Melbourne')
              .format('h:mm:ss a')}
          </span>
        </IndividualStat>
        {/* Now playing */}
        <NowPlaying now_playing={now_playing} formatted={formatted} />
        {/* Weather */}
        <IndividualStat>
          <h3>
            <i className="fa fa-sun" /> weather
          </h3>
          <span>
            {numeral(id.weather.temperature).format('0')}º
            <small>C & {id.weather.summary}</small>
          </span>
        </IndividualStat>
        {trackers.map(({ id, ...rest }) => (
          <BasicStat key={id} value={formatted[id]} {...rest} />
        ))}
      </DayStats>
    </Statistics>
  );
};

const Grids = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoints.md} {
    flex-direction: row;
  }
  margin: 0 -0.5rem;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 100%;
  ${breakpoints.md} {
    flex: 1 0 50%;
  }
`

class Index extends Component {
  interval = null;
  state = {
    home: {}
  };
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
    db.bindToState('home', {
      context: this,
      state: 'home'
    });
  }
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  render() {
    const { home, selected_day } = this.state;

    return (
      <Container>
        <Hero>
          <H1>
            Will Hackett.
          </H1>
          <H2>
            I'm a software engineer and product designer. I help companies, big & small, build great digital products & experiences.
            <br />
            <Link to="/about">Read more.</Link>
          </H2>
        </Hero>
        <Grids>
          <Grid>
            <Article type="long" tag="Product" title="Valmont" />
            <Article type="tall" tag="Security" title="Does my password suck?" />
            <Article type="tall" tag="Engineering" title="Now playing in the office" />
          </Grid>
          <Grid>
            <Article type="tall" tag="Engineering" title="JavaScript is weird" />
            <Article type="tall" tag="Engineering" title="Monoliths and Microservices" />
            <Article type="long" tag="Product" title="Expedia Viewfinder" />
          </Grid>
        </Grids>
        <Stats home={home} setDay={this.setDay} selected_day={selected_day} />
      </Container>
    );
  }
}

export default connect()(Index);
