import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="calendar">
        <div className="branding">
          <div className="badge" />
        </div>
        <iframe src="https://calendly.com/willhackett/10min" width="100%" height="100%" frameBorder="0"/>
      </div>
    );
  }
}
export default Calendar;
