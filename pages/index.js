import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import validator from 'validator';

import '../css/index.css';
import '../css/fonts.css';
import Logo from '../components/Logo';
import Map from '../components/Map';
import EventCard from '../components/EventCard';

import spacesImage1 from '../assets/images/spaces-1.jpg';
import spacesImage2 from '../assets/images/spaces-2.jpg';
import spacesImage3 from '../assets/images/spaces-3.jpg';

import servicesImage1 from '../assets/images/services-1.jpg';
import servicesImage2 from '../assets/images/services-2.jpg';
import servicesImage3 from '../assets/images/services-3.jpg';
import servicesImage4 from '../assets/images/services-4.jpg';

import manhattanLogo from '../assets/images/events/manhattan-logo.jpg';
import parrotLogo from '../assets/images/events/parrot.png';
import event1Logo from '../assets/images/events/event1.png';
import event2Logo from '../assets/images/events/event2.jpg';
import dldLogo from '../assets/images/events/dld2.jpg';

export default class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      currentSpace: 0,
      spaces: [
        {
          title: 'Flexible Workspace for Growing Teams',
          text: 'We provide the resources so growing teams can focus their business. Many of our companies have graduated from coworking spaces.',
          color: 'rgb(90, 146, 191)',
          imageUrl: spacesImage1,
        }, {
          title: 'Branded Floors for Established Companies',
          text: 'When you need your own floor we provide dedicated, branded space for your company with a backbone of Knotel management.',
          color: 'rgb(187, 159, 125)',
          imageUrl: spacesImage2,
        }, {
          title: 'Flagship Buildings for World Leaders',
          text: 'When you are ready to take over the world, Knotel will take over a building for you. Turnkey commercial real estate at any size.',
          color: 'rgb(100, 77, 136)',
          imageUrl: spacesImage3,
        },
      ],

      currentService: 0,
      services: [
        {
          title: 'Sourcing and Buildout',
          text: 'Knotel bundles property market insight with interior design expertise and buildout management, which ensures the client’s space vision is met on time, on budget, and without headaches.',
          imageUrl: servicesImage1,
        }, {
          title: 'Seamless Operations',
          text: 'Knotel provides comprehensive office services powered by domain experts and best of breed technology. Enjoy the highest ratio of conference rooms per person in the industry, and exclusive deals at a high quality set of partners.',
          imageUrl: servicesImage2,
        }, {
          title: 'Flexible Terms',
          text: 'Knotel has a simple pricing structure with flexible terms. We offer various month to month and fixed term agreements tailored to your needs.',
          imageUrl: servicesImage3,
        }, {
          title: 'Events and Community',
          text: 'Knotels are vibrant spaces, with engaged communities and a strong roster of events. Enjoy office hours and informal access to like-minded industry professionals.',
          imageUrl: servicesImage4,
        },
      ],

      subscription: {
        firstName: '',
        lastName: '',
        email: '',
      },

      events: [{
        name: 'Entrepreneurship Council',
        description: '8.30 am to 10.00 am at Knotel',
        imageUrl: manhattanLogo,
        date: '07 jun',
        type: 'coming',
      }, {
        name: 'Knotel private founders series',
        description: '5:00 pm to 7:00 pm at Knotel Union sq 1',
        imageUrl: parrotLogo,
        date: '14 sep',
        type: 'coming',
      }, {
        name: 'Your first 100 transactions',
        description: '6:30 pm to 9:30 pm at Knotel Bryant',
        imageUrl: event1Logo,
        date: '30 may',
        type: 'past',
      }, {
        name: 'Future of cities - DLD NYC',
        description: '8:00 am to 2:00 pm at Knotel Bryant',
        imageUrl: dldLogo,
        date: '12 may',
        type: 'past',
      }, {
        name: 'Health tech founders\' stories',
        description: '6:30 pm to 8:30 pm at Knotel Bryant',
        imageUrl: event2Logo,
        date: '12 may',
        type: 'past',
      },],

    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = () => {
    const fillNavbar = (window.pageYOffset || document.documentElement.scrollTop) > 0;
    this.setState({ fillNavbar });
  }

  render() {
    const spacesUrls = this.state.spaces.map(space => space.imageUrl).map(url => `url('${url}')`).join(', ');
    const spacesSizes = this.state.spaces.map((_, i) => i === this.state.currentSpace ? 'cover' : '0px');

    const servicesUrls = this.state.services.map(space => space.imageUrl).map(url => `url('${url}')`).join(', ');
    const servicesSizes = this.state.services.map((_, i) => i === this.state.currentService ? 'cover' : '0px');
    return (
      <div className="main-page">
        <nav className={`navbar ${this.state.fillNavbar ? 'navbar--fill' : ''}`}>
          <div className="navbar__logo-wrap">
            <div className="navbar__logo"><Logo small/></div>
          </div>
          <div className="navbar__contacts">
            <a className="contacts-link" href="tel:6788272782">678-827-2782</a>
            <a className="contacts-link" href="mailto:hellohello@knotel.com">hellohello@knotel.com</a>
          </div>
          <div className="navbar__buttons">
            <Link className="navbar-button" to="/login">Login</Link>
          </div>
        </nav>
        <section className="section section--hero">
          <div className="hero-logo-wrap">
            <div className="hero-logo">
              <Logo />
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-text__title">Commit to your business, not a lease</h1>
            <h2 className="hero-text__subtitle">Headquarters as a Service</h2>
            <button type="button" className="hero-text__button">Book a tour</button>
          </div>
          <div className="bottom-nav">
            <Link className="bottom-nav__link">Locations</Link>
            <Link className="bottom-nav__link">Spaces</Link>
            <Link className="bottom-nav__link">Services</Link>
            <Link className="bottom-nav__link">Events</Link>
            <Link className="bottom-nav__link bottom-nav__link--hiring" to="/">We're hiring</Link>
          </div>
          <div className="bottom-nav bottom-nav--smaller">
            <Link className="bottom-nav__link bottom-nav__link--smaller">Tenant Reps</Link>
            <Link className="bottom-nav__link bottom-nav__link--smaller">I have space</Link>
          </div>
        </section>
        <section className="section section--map">
          <div className="section__title">
            Our Locations
          </div>
          <div className="section__content">
            <div className="map">
              <Map />
            </div>
          </div>
        </section>
        <section className="section section--spaces">
          <div className="section__title">
            Spaces we offer
          </div>
          <div className="section__content"
               style={{ backgroundImage: spacesUrls, backgroundSize: spacesSizes }}>
            <div className="spaces-cards">
              {
                this.state.spaces.map((space, index) =>
                  <div className="spaces-cards__item" style={{ backgroundColor: space.color }} onMouseOver={() => {
                    this.setState({ currentSpace: index });
                  }}>
                    { this.state.currentSpace !== index ?
                      <div className="card-title">{space.title}</div>
                      :
                      <div className="card-text">{space.text}</div>
                    }
                  </div>
                )
              }
            </div>
          </div>
        </section>
        <section className="section section--services">
          <div className="section__title">
            Services We Provide
          </div>
          <div className="section__content">
            <div className="tabs">
              <div className="tabs__container">
                {
                  this.state.services.map((service, index) =>
                    <div className={`tab ${index === this.state.currentService ? 'tab--active' : ''}`}
                         onMouseOver={() => {
                           this.setState({ currentService: index });
                         }}>
                      <div className="tab__title">
                        {service.title}
                      </div>
                      <div className="tab__text">
                        {service.text}
                      </div>
                    </div>
                  )
                }
              </div>
              <div className="tabs__image" style={{ backgroundImage: servicesUrls, backgroundSize: servicesSizes }}>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--events">
          <div className="section__title">
            Events we're hosting
          </div>
          <div className="section__content">
            <form className="subscription-form">
              <h3 className="subscription-form__title">Stay in the know about Knotel events and news</h3>
              <div className="subscription-form__input-container">
                <input type="text" placeholder="First Name (required)" required className="subscription-form__input"
                       value={this.state.subscription.firstName}
                       onChange={({ currentTarget: { value } }) => this.setState({
                         subscription: {
                           ...this.state.subscription,
                           firstName: value
                         }
                       })}
                />
                <input type="text" placeholder="Last Name (required)" required className="subscription-form__input"
                       value={this.state.subscription.lastName}
                       onChange={({ currentTarget: { value } }) => this.setState({
                         subscription: {
                           ...this.state.subscription,
                           lastName: value
                         }
                       })}
                />
                <input type="email" placeholder="Email (required)" required className="subscription-form__input"
                       value={this.state.subscription.email}
                       onChange={({ currentTarget: { value } }) => this.setState({
                         subscription: {
                           ...this.state.subscription,
                           email: value
                         }
                       })}
                />
              </div>
              <button type="submit" className="subscription-form__button"
                      disabled={validator.isEmpty(this.state.subscription.firstName) || validator.isEmpty(this.state.subscription.lastName) || !validator.isEmail(this.state.subscription.email)}
              >Subscribe
              </button>
            </form>
            <div className="events">
              <div className="events__column">
                <div className="column__title">
                  Coming Events
                </div>
                {
                  this.state.events.filter(e => e.type === 'coming').map(e =>
                    <EventCard {...e} />
                  )
                }
              </div>
              <div className="events__column">
                <div className="column__title">
                  Past Events
                </div>
                {
                  this.state.events.filter(e => e.type === 'past').map(e =>
                    <EventCard {...e} />
                  )
                }
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-logo">
            <Logo />
          </div>
          <nav className="footer-nav">
            <Link className="footer-nav__item">Careers</Link>
            <Link className="footer-nav__item">Terms</Link>
            <Link className="footer-nav__item">Tenant Reps</Link>
            <Link className="footer-nav__item">I have space</Link>
          </nav>
          <p className="copyright">
            Copyright © 2017 KNOTEL. All rights reserved.
          </p>
        </footer>
      </div>
    )
  }
}
