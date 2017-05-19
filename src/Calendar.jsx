import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.iframe = null;
  }
  componentDidMount() {
    const styles = document.createElement('styles');
    styles.innerHTML = `
      .branding { display: none; }
    `;
    console.log(this.iframe);
    this.iframe.target.document.body.appendChild(styles);
  }
  render() {
    return (
      <div className="calendar">
        <div className="branding">
          <div className="badge" />
        </div>
        <iframe src="https://calendly.com/willhackett/10min" width="100%" height="100%" frameBorder="0" ref={iframe => this.iframe = iframe}/>
      </div>
    );
  }
}
export default Calendar;
