/* global window document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import scroll from 'scroll';
import ease from 'ease-component';
import './App.scss';
import Navigation from './Navigation';
import Block from './Block';
import {
  Abilities,
  AboutMe,
  Work,
  Education,
} from './Content';

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  state = {
    scrollPosition: 0,
    maxScrollValue: 0,
    maxScrollbarValue: 0,
    viewPortWidth: 0,
    portrait: false,
  };

  constructor(props) {
    super(props);
    this.scrollarea = React.createRef();
    this.scrollbar = React.createRef();
    this.aboutMe = React.createRef();
    this.abilities = React.createRef();
    this.work = React.createRef();
    this.education = React.createRef();
    this.contact = React.createRef();
  }

  componentDidMount() {
    const { location } = this.props;
    this.scrollTo(location.pathname);
    this.updateWindowSizes();
    window.addEventListener('resize', this.updateWindowSizes);
    this.scrollarea.current.addEventListener('scroll', debounce(this.snapToNearestSection, 50));
    this.scrollarea.current.addEventListener('scroll', this.calculateScrollbarPosition);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.scrollTo(location.pathname);
    }
  }

  snapToNearestSection = () => {
    const { history, location } = this.props;
    const { viewPortWidth, portrait } = this.state;
    const offset = {
      work: this.work.current.offsetLeft,
      abilities: this.abilities.current.offsetLeft,
      education: this.education.current.offsetLeft,
      contact: this.contact.current.offsetLeft,
    };
    const posX = this.scrollarea.current.scrollLeft;
    const blockHalfWidth = this.aboutMe.current.offsetWidth / 2;
    const offsetWidth = portrait ? 0.019 : 0.007;

    if (posX >= offset.contact - blockHalfWidth && location.path !== '/contact') {
      history.push('/contact');
      if (portrait) {
        this.setView(offset.contact - (viewPortWidth * offsetWidth), 0);
      } else {
        this.setView(offset.education - (viewPortWidth * offsetWidth), 0);
      }
    } else if (posX >= offset.education - blockHalfWidth && location.path !== '/education') {
      history.push('/education');
      this.setView(offset.education - (viewPortWidth * offsetWidth), 0);
    } else if (posX >= offset.work - blockHalfWidth && location.path !== '/work') {
      history.push('/work');
      this.setView(offset.work - (viewPortWidth * offsetWidth), 0);
    } else if (posX >= offset.abilities - blockHalfWidth && location.path !== '/abilities') {
      history.push('/abilities');
      this.setView(offset.abilities - (viewPortWidth * offsetWidth), 0);
    } else if (posX < offset.abilities - blockHalfWidth && location.path !== '/') {
      history.push('/');
      this.setView(0, 0);
    }
  };

  scrollTo = (location) => {
    const { viewPortWidth, portrait } = this.state;
    const offsetWidth = portrait ? 0.019 : 0.007;
    switch (location) {
      case '/abilities':
        this.setView(this.abilities.current.offsetLeft - (viewPortWidth * offsetWidth), 0);
        break;
      case '/work':
        this.setView(this.work.current.offsetLeft - (viewPortWidth * offsetWidth), 0);
        break;
      case '/education':
        this.setView(this.education.current.offsetLeft - (viewPortWidth * offsetWidth), 0);
        break;
      case '/contact':
        if (portrait) {
          this.setView(this.contact.current.offsetLeft - (viewPortWidth * offsetWidth), 0);
        } else {
          this.setView(this.education.current.offsetLeft - (viewPortWidth * offsetWidth), 0);
        }
        break;
      default:
        this.setView(0, 0);
    }
  };

  setView = (x, y) => {
    scroll.left(this.scrollarea.current, x, { duration: 250, ease: ease.inOutSine });
    scroll.top(this.scrollarea.current, y, { duration: 250, ease: ease.inOutSine });
  };

  calculateScrollbarPosition = () => {
    const { maxScrollValue, maxScrollbarValue } = this.state;
    const posX = this.scrollarea.current.scrollLeft;
    const scrollPercentage = posX / maxScrollValue;
    const scrollPosition = scrollPercentage * maxScrollbarValue;
    this.setState({ scrollPosition });
  };

  updateWindowSizes = () => {
    const viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const maxScrollValue = this.scrollarea.current.scrollWidth - viewPortWidth;
    const maxScrollbarValue = viewPortWidth - this.scrollbar.current.offsetWidth;
    this.setState({
      viewPortWidth,
      maxScrollValue,
      maxScrollbarValue,
      portrait: viewPortHeight > viewPortWidth,
    });
  };

  render() {
    const { scrollPosition } = this.state;

    return (
      <div className="App">
        <div
          className="scrollbar"
          ref={this.scrollbar}
          style={{ left: scrollPosition }}
        />
        <div className="scrollarea-outer" ref={this.scrollarea}>
          <div className="scrollarea-inner">
            <Navigation />
            <Block name="about-me" reference={this.aboutMe}>
              <Block.Text title="Hello">
                <AboutMe />
              </Block.Text>
            </Block>
            <Block name="abilities" reference={this.abilities}>
              <Block.Text title="Abilities">
                <Abilities />
              </Block.Text>
            </Block>
            <Block name="work" reference={this.work}>
              <Block.Text title="Work">
                <Work />
              </Block.Text>
            </Block>
            <Block name="education" reference={this.education}>
              <Block.Text title="Education">
                <Education />
              </Block.Text>
            </Block>
            <Block name="contact" reference={this.contact}>
              <Block.Text title="Contact">
                <p>Form here</p>
              </Block.Text>
            </Block>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
