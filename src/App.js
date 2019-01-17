/* global window document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
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
    portraitViewport: false,
  };

  constructor(props) {
    super(props);
    this.aboutMe = React.createRef();
    this.abilities = React.createRef();
    this.work = React.createRef();
    this.education = React.createRef();
    this.contact = React.createRef();
  }

  componentDidMount() {
    const { location } = this.props;
    this.scrollTo(location.pathname);
    this.viewportOrientation();
    window.addEventListener('scroll', debounce(this.snapToNearestSection, 50));
    window.addEventListener('resize', this.snapToNearestSection);
    window.addEventListener('resize', this.viewportOrientation);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.scrollTo(location.pathname);
    }
  }

  viewportOrientation = () => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({ portraitViewport: h > w });
  };

  snapToNearestSection = () => {
    const { portraitViewport } = this.state;
    if (!portraitViewport) {
      const { history, location } = this.props;
      const offset = {
        work: this.work.current.offsetLeft,
        abilities: this.abilities.current.offsetLeft,
        education: this.education.current.offsetLeft,
        contact: this.education.current.offsetLeft,
      };
      const posX = window.scrollX;
      const blockHalfWidth = this.aboutMe.current.offsetWidth / 2;

      if (posX >= offset.contact - blockHalfWidth && location.path !== '/contact') {
        history.push('/contact');
        window.scrollTo(offset.contact - 10, 0);
      } else if (posX >= offset.work - blockHalfWidth && location.path !== '/work') {
        history.push('/work');
        window.scrollTo(offset.work - 10, 0);
      } else if (posX >= offset.education - blockHalfWidth && location.path !== '/work') {
        history.push('/education');
        window.scrollTo(offset.work - 10, 0);
      } else if (posX >= offset.abilities - blockHalfWidth && location.path !== '/abilities') {
        history.push('/abilities');
        window.scrollTo(offset.abilities - 10, 0);
      } else if (posX < offset.abilities - blockHalfWidth && location.path !== '/') {
        history.push('/');
        window.scrollTo(0, 0);
      }
    }
  };

  scrollTo = (location) => {
    switch (location) {
      case '/abilities':
        window.scrollTo(this.abilities.current.offsetLeft, 0);
        break;
      case '/work':
        window.scrollTo(this.work.current.offsetLeft, 0);
        break;
      case '/education':
        window.scrollTo(this.education.current.offsetLeft, 0);
        break;
      case '/contact':
        window.scrollTo(this.education.current.offsetLeft, 0);
        break;
      default:
        window.scrollTo(0, 0);
    }
  };

  render() {
    const { portraitViewport } = this.state;

    return (
      <div className={`App ${portraitViewport ? 'portrait' : ''}`}>
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
    );
  }
}

export default App;
