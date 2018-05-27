// @flow

import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Page from 'components/Page'
import { WH } from 'components/Logo'

import waitForImageToLoad from 'utils/waitForImageToLoad'

import splash from './splash.jpg'
import logos from './logos'
import './Products.css'

type PropsType = {
  ready: () => void
}
type StateType = {
}

class Products extends Component<PropsType, StateType> {
  state = {
    type: false
  }
  async componentDidMount() {
    await Promise.all(Object.keys(logos).map((logo) => new Promise((resolve) => {
      waitForImageToLoad(logos[logo], resolve)
    })))
    await (() => new Promise((resolve) => waitForImageToLoad(splash, resolve)))()
    this.props.ready()
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Products - what i've built — Will Hackett</title>
        </Helmet>
        <Page className="imageblock height-25 imagebg">
          <div className="background-image-holder bio--image" style={{
            background: 'black',
            opacity: 1,
          }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-7 contact--types">
                <h1>Products</h1>
                <h3>Stuff I've built</h3>
              </div>
            </div>
          </div>
          <WH />
        </Page>
        <Page>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3>InnoWell</h3>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.innowell.org/synergy-online-system/" target="_blank" rel="noopener noreferrer">Synergy Online System</a></h4>
                  <p>Synergy is a platform designed to respond to the unique needs of the users&mdash;giving them the ability to manage their own health plan in collaboration with a health professional or service provider.</p>
                  <img src={logos.innowell} alt="InnoWell" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
              <div className="col-md-4" />
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <h3>OpenClub</h3>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.openclub.co/" target="_blank" rel="noopener noreferrer">OpenClub</a></h4>
                  <p>OpenClub is simple community management software with digital payments, events ticketing and automatic renewals built in.</p>
                  <img src={logos.openclub} alt="OpenClub" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
              <div className="col-md-4" />
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <h3>Streetvines</h3>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4>Streetvines</h4>
                  <p>Streetvines was a startup aimed at delivering peer-to-peer residential real estate.</p>
                  <img src={logos.streetvines} alt="Streetvines" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
              <div className="col-md-4" />
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <h3>Firelabs</h3>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.bmw.com/" target="_blank" rel="noopener noreferrer">BMW MyClub</a></h4>
                  <p>Club management and community building product offered by BMW Group to their member car clubs.</p>
                  <img src={logos.bmwgroup} alt="BMW Group" style={{ maxHeight: '2rem' }}/>
                </div>
                <div className="text-block">
                  <h4><a href="https://www.valmont.com.au" target="_blank" rel="noopener noreferrer">Valmont</a></h4>
                  <p>Valmont displays their work through an interactive portfolio and experimental digital experience.</p>
                  <img src={logos.valmont} alt="Valmont" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.auslaw.org" target="_blank" rel="noopener noreferrer">AusLaw</a></h4>
                  <p>AusLaw was an experiment to delivery a platform to connect people with the legal aid they need.</p>
                  <img src={logos.claytonutz} alt="Clayton Utz" style={{ maxHeight: '2rem' }}/>
                </div>
                <div className="text-block">
                  <h4><a href="https://www.gravity.com.au" target="_blank" rel="noopener noreferrer">Gravity</a></h4>
                  <p>Gravity is a coworking and event space provider with locations in Brisbane, Melbourne and Sydney.</p>
                  <img src={logos.gravity} alt="Gravity Coworking" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <h3>Studio None</h3>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.expedia.com/pictures" target="_blank" rel="noopener noreferrer">Expedia Videfinder</a></h4>
                  <p>A digital experience for discovering holiday destinations and linking directly to the Expedia travel sales platform.</p>
                  <img src={logos.expedia} alt="Expedia Viewfinder" style={{ maxHeight: '2rem' }}/>
                </div>
                <div className="text-block">
                  <h4><a href="https://www.cciq.com.au" target="_blank" rel="noopener noreferrer">CCIQ</a></h4>
                  <p>A business directory, membership portal and accompanying web design for the Chamber of Commerce and Industry Queensland .</p>
                  <img src={logos.cciq} alt="CCIQ" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.bwf.org.au" target="_blank" rel="noopener noreferrer">Brisbane Writers Festival</a></h4>
                  <p>Studio None was the creative partner for BWF2015 providing an app and accompanying site to discover writers and events.</p>
                  <img src={logos.bwf} alt="Brisbane Writers Festival" style={{ maxHeight: '2rem' }}/>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <h3>Corporate Real Estate</h3>
              </div>
              <div className="col-md-4">
                <div className="text-block">
                  <h4><a href="https://www.corporaterealestate.com/" target="_blank" rel="noopener noreferrer">CorporateRealEstate.com</a></h4>
                  <p>One of the earliest projects I worked on delivered a new experience for discovering commercial real estate spaces.</p>
                  <img src={logos.cre} alt="CorporateRealEstate" />
                </div>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </Page>

      </Fragment>
    )
  }
}
export default Products
