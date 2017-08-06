import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'teardrop';
import _ from 'lodash';
import m from 'moment';

import DataContainer from './components/DataContainer';

class TelstraStatus extends Component {
  static contextTypes = {
    setBreadcrumb: PropTypes.func
  }
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      filters: {
        events: 'current'
      },
      data: {
        current: [],
        future: [],
        past: []
      },
      filtered: null,
      code: '',
      state: 'ALL'
    }

    this.stateFilter = this.stateFilter.bind(this);
    this.postCodeFilter = this.postCodeFilter.bind(this);

    this.dataSets = {
      current: '/api/telstra/events_current.json',
      future: '/api/telstra/events_future.json',
      past: '/api/telstra/events_past.json'
    }
    this.postCodes = window.location.origin + '/location_state_postcode.json';
    this.states = [
      { name: 'All States', key: 'ALL' },
      { name: 'Australian Capital Terriroty', key: 'ACT' },
      { name: 'New South Wales', key: 'NSW' },
      { name: 'Northern Territory', key: 'NT' },
      { name: 'Queensland', key: 'QLD' },
      { name: 'South Australia', key: 'SA' },
      { name: 'Tasmania', key: 'TAS' },
      { name: 'Victoria', key: 'VIC' },
      { name: 'Western Australia', key: 'WA' }
    ];
    this.technologies = [
      '3G',
      'Home Phone',
      'ADSL',
      'Cable',
      'FOXTEL',
      'NBN',
      '4G',
      'Satellite'
    ]
  }
  componentWillMount() {
    this.context.setBreadcrumb({
      link: '/telstra',
      title: 'Telstra Status'
    })
  }
  setCountdown(timer = 300000) {
    this.timeout = setTimeout(() => this.loadData(), timer);
  }
  async loadData() {
    // Save time by caching
    if (localStorage.getItem('cached_data')) {
      let lastCache = JSON.parse(localStorage.getItem('cached_data'));
      if ((new Date() - new Date(lastCache.last_check)) < (5 * 60 * 1000)) {
        this.setState({ ...lastCache, loading: false });
        this.setCountdown(300000 - (new Date() - new Date(lastCache.last_check)));
        return;
      }
    }

    const currentRawData = await fetch(this.dataSets.current);
    // const futureRawData = await fetch(this.dataSets.future);
    // const pastRawData = await fetch(this.dataSets.past);

    let data = {};
    data.current = await currentRawData.json();
    // data.future = await futureRawData.json();
    // data.past = await pastRawData.json();

    localStorage.setItem('cached_data', JSON.stringify({
      last_check: new Date(),
      data
    }));

    this.setState({ data, loading: false });
    this.setCountdown();
  }
  postCodeFilter(e) {
    const code = e.target.value;

    if (code.length === 0) return this.setState({ filtered: null });

    if (this.to) clearTimeout(this.to);
    this.to = setTimeout(() => {
      let data = this.state.data[this.state.filters.events];

      let filtered = _.filter(data, d => _.includes(d.postcodes ? d.postcodes.join() : '', code));
      this.setState({ filtered });
    }, 500);
  }
  stateFilter(e) {
    const state = e.target.value;
    console.log(state);

    if (state === 'All States') {
      return this.setState({ filtered: null });
    }

    let data = this.state.data[this.state.filters.events];

    const selectedState = _.find(this.states, s => s.name === state);
    let filtered = _.filter(data, d => d.state === selectedState.key);

    this.setState({ filtered });
  }
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { filtered, data, filters } = this.state;

    console.log(filtered, data);

    const baseData = data[filters.events];
    const filteredData = filtered || baseData;

    const currentStatus = _.groupBy(baseData, ev => ev.technology);

    const currentStatusCount = (row, stateKey) => {
      return _.filter(baseData, ev => ev.technology && _.includes(ev.technology.toLowerCase(), row.toLowerCase()) && ev.state === stateKey).length;
    }
    const currentCellColor = (row, stateKey) => {
      const count = currentStatusCount(row, stateKey);
      if (count === 0) return { backgroundColor: '#ccff91' };
      return { backgroundColor: '#ffa98e' };
    }

    const groups = _.groupBy(filteredData, d => d.technology);

    const format = 'YYYY-MM-DDTHH:mm:ss'

    return (
      <DataContainer>
        {this.state.loading ? (
          <h5>Downloading data. Please wait...</h5>
        ) : (
          <div>
            <h3 style={{ marginBottom: 15 }}>Telstra Status</h3>
            <div className="row">
              <div className="eight columns">
                <h5>Explanation</h5>
                <p>{"Telstra has a habbit of hiding the details. You'll notice some events simply have their dates updated. In a future version of this, I'll be storing their records in a Google Fusion Table and tracking dodgey updates of start/end dates, and ETAs."}</p>
                <h5>Issues per state</h5>
                <table className="u-full-width centered">
                  <thead>
                    <tr>
                      <td></td>
                      {this.states.map(state => <td key={state.key}>{state.key}</td>)}
                    </tr>
                  </thead>
                  <tbody>
                    {this.technologies.map(row => (
                      <tr key={row}>
                        <td>{row}</td>
                        {this.states.map(state => <td key={state.key + row} className="center" style={currentCellColor(row, state.key)}>{currentStatusCount(row, state.key)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="four columns">
                <div className="six columns">
                  <label htmlFor="stateFilter">Filter state:</label>
                  <select id="stateFilter" className="u-full-width" onChange={this.stateFilter}>
                    {this.states.map(state => <option key={state.key}>{state.name}</option>)}
                  </select>
                </div>
                <div className="six columns">
                  <label htmlFor="stateFilter">Post Code:</label>
                  <input type="number" maxLength={4} onChange={this.postCodeFilter} />
                </div>
                <hr />
                {Object.keys(groups).map(group => (
                  <div key={'group-' + group}>
                    <h5>{group}</h5>
                    {groups[group].map((ev, key) => (
                      <div key={'ev' + key}>
                        <p>
                          <strong>{_.startCase(ev.locality ? ev.locality.toLowerCase() : '')} {ev.short_description} {ev.technology} outage</strong>
                          <br />
                          {ev.description}
                          <br />
                          <small>
                            <strong>Starting: </strong> {ev.start_timestamp ? m(ev.start_timestamp.slice(0,19)).format('llll') : 'N/A'}<br />
                            <strong>Ending: </strong> {ev.end_timestamp ? m(ev.end_timestamp.slice(0,19)).format('llll') : 'No ETA yet'}<br />
                            <strong>State: </strong> {ev.state || 'N/A'}<br />
                            <strong>Post Codes: </strong> {ev.postcodes ? ev.postcodes.join(', ') : 'N/A'}<br />
                          </small>
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </DataContainer>
    );
  }
}
export default TelstraStatus;
