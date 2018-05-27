// @flow

import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Page from 'components/Page'
import { WH } from 'components/Logo'

import waitForImageToLoad from 'utils/waitForImageToLoad'

import house from './house.jpg'
import blue from './blue.jpg'
import './Contact.css'

type EnquiryTypes = false
| 'hire'
| 'app'
| 'club'
| 'date'
| 'legal'
| 'invest'
| 'consult'
| 'dog'
| 'partner'
| 'speak'
| 'easterEgg'

type PropsType = {
  ready: () => void
}
type StateType = {
  type: EnquiryTypes,
  submitting: EnquiryTypes,
  partner: boolean,
  speak: boolean,
}

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component<PropsType, StateType> {
  state = {
    type: false,
    submitting: false,
    partner: false,
    speak: false,
  }
  componentDidMount() {
    waitForImageToLoad(house, this.props.ready)
  }
  submitForm = (form: EnquiryTypes) => async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form) return false;

    this.setState({ submitting: form })

    const fields = {}

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form,
          ...fields
        })
      })
      this.setState({ [form]: true })
    } catch (err) {
      alert(err.message)
    }
  }
  setType = (type: EnquiryTypes) => {
    if (type === this.state.type) type = false
    this.setState({ type })
  }
  render() {
    const { state: { type, submitting, partner, speak } } = this
    return (
      <Page className="imageblock switchable height-100">
        <Helmet>
          <title>Contact - get in touch — Will Hackett</title>
        </Helmet>
        <div className="imageblock__content col-lg-5 col-sm-4 pos-right">
          <div className="background-image-holder" style={{
            background: `url(${type === 'easterEgg' ? blue : house})`,
            opacity: 1,
          }} />
        </div>
        <div className="container pos-vertical-center">
          <div className="row">
            <div className="col-lg-6 col-sm-7 contact--types">
              <h1>Contact</h1>
              <h3>What would you like to talk about?</h3>
              <hr />
              <h4>
                <button onClick={() => this.setType('consult')} className={type === 'consult' && 'active'}>Digital consulting</button>
                , <button onClick={() => this.setType('app')} className={type === 'app' && 'active'}>building an app</button>
                , <button onClick={() => this.setType('club')} className={type === 'club' && 'active'}>community software</button>
                , <button onClick={() => this.setType('partner')} className={type === 'partner' && 'active'}>partnerships</button>
                , <button onClick={() => this.setType('hire')} className={type === 'hire' && 'active'}>hiring me</button>
                , <button onClick={() => this.setType('invest')} className={type === 'invest' && 'active'}>investment</button>
                , <button onClick={() => this.setType('date')} className={type === 'date' && 'active'}>hot date</button>
                , <button onClick={() => this.setType('legal')} className={type === 'legal' && 'active'}>"legal reasons"</button>
                , <button onClick={() => this.setType('speak')} className={type === 'speak' && 'active'}>speaking</button>
                &nbsp;or <button onClick={() => this.setType('dog')} className={type === 'dog' && 'active'}> I found your dog</button>
                <span onClick={() => this.setType('easterEgg')}>.</span>
              </h4>
              <hr />
              <TransitionGroup>
                {type === 'consult' && <CSSTransition
                  exit
                  mountOnEnter
                  unmountOnExit
                  classNames="contact--types--transition"
                  timeout={500}
                  >
                    <div>
                      <h4>The team at Firelabs is best suited to handle your digital consulting requirements. Please get in touch with them and ask for Will.</h4>
                      <a className="btn bg--pink" href="https://www.firelabs.com.au/" rel="noopener noreferrer" target="_blank">
                        <span className="btn__text">Contact Firelabs</span>
                      </a>
                      <hr />
                    </div>
                </CSSTransition>}
                {type === 'app' && (
                  <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>The app developers over at Firelabs are eager to get their hands dirty on some new projects&mdash;they'll be your best point of contact for any app development enquiries.</h4>
                        <a className="btn bg--pink" href="https://www.firelabs.com.au/" rel="noopener noreferrer" target="_blank">
                          <span className="btn__text">Contact Firelabs</span>
                        </a>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'club' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>OpenClub provides the best community management software with automatic renewals, event ticketing, online payments and member management out of the box. To find out more about OpenClub, visit their website.</h4>
                        <a className="btn bg--pink" href="https://www.openclub.co/" rel="noopener noreferrer" target="_blank">
                          <span className="btn__text">Visit OpenClub</span>
                        </a>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'hire' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>The best way to find out if I'm available for hire is to connect with me on LinkedIn.</h4>
                        <a className="btn btn--icon bg--pink" href="https://www.linkedin.com/in/willhackett/" rel="noopener noreferrer" target="_blank">
                          <i className="socicon socicon-linkedin" />
                          <span className="btn__text">Connect on LinkedIn</span>
                        </a>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'partner' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>I'm always looking for new ways to partner with individuals and businesses to achieve our goals together. Let me know your details and I'll try to get in touch.</h4>
                        {!partner ? (
                          <form className="contact--form form--inline" onSubmit={this.submitForm('partner')}>
                            <label className="h4">Your name <input type="text" name="name" />,&nbsp;</label>
                            <label className="h4">email <input type="email" name="email" />,&nbsp;</label>
                            <label className="h4">company <input type="email" name="email" />&nbsp;</label>
                            <label className="h4">and message <input type="text" name="message" />.</label>
                            <button className="btn bg--pink" type="submit" disabled={submitting === 'partner'}>
                              <span className="btn__text">
                                {submitting === 'partner' ? 'Submitting...' : 'Get in touch'}
                              </span>
                            </button>
                          </form>
                        ) : (
                          <h4>Thanks! I'll be in touch!</h4>
                        )}
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'invest' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>Please email <a href="mailto:invest@willhackett.com">invest@willhackett.com</a> for more information.</h4>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'date' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>Aww. Thanks. Maybe try Tinder instead?</h4>
                        <a className="btn btn--icon bg--pink" href="https://www.tinder.com/" rel="noopener noreferrer" target="_blank">
                          <i style={{ fontStyle: 'initial' }}><span role="img" aria-label="very hot emoji">🔥</span></i>
                          <span className="btn__text">Get Tinder</span>
                        </a>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'legal' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>For all "good" legal enquiries, please email <a href="mailto:legal@willhackett.com">legal@willhackett.com</a>. For "bad" legal enquiries please email somebody else.</h4>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'speak' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>I love speaking about tech, business, development and lots of other things. If you'd like me to make an appearance just fill in the form below and I'll see what I can do.</h4>
                        {!speak ? (
                          <form className="contact--form form--inline">
                            <label className="h4">Your name <input type="text" name="name" />,&nbsp;</label>
                            <label className="h4">email <input type="email" name="email" />,&nbsp;</label>
                            <label className="h4">company <input type="email" name="email" />,&nbsp;</label>
                            <label className="h4">where <input type="text" name="where" />,&nbsp;</label>
                            <label className="h4">when <input type="date" name="when" />,&nbsp;</label>
                            <label className="h4">speaking about <input type="text" name="about" />.</label>
                            <button className="btn bg--pink" type="submit" disabled={submitting === 'speak'}>
                              <span className="btn__text">
                                {submitting === 'speak' ? 'Submitting...' : 'Touch base'}
                              </span>
                            </button>
                          </form>
                        ) : (
                          <h4>Thanks! I'll be in touch soon!</h4>
                        )}
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'dog' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>Why are you here? Call the number on the back of his tag! Give me my dog back!!!</h4>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
                  {type === 'easterEgg' && (
                    <CSSTransition
                    exit
                    mountOnEnter
                    unmountOnExit
                    classNames="contact--types--transition"
                    timeout={500}
                    >
                      <div>
                        <h4>Oh look, you found an easter egg. Here's a picture of my dog.</h4>
                        <hr />
                      </div>
                    </CSSTransition>
                  )}
              </TransitionGroup>
            </div>
          </div>
        </div>
        <WH />
      </Page>
    )
  }
}
export default Contact
