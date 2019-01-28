/* eslint-disable react/jsx-one-expression-per-line */
import React, { PureComponent } from 'react';
import {
  IoIosMail,
  IoLogoLinkedin,
  IoIosMusicalNotes,
  IoLogoGithub,
} from 'react-icons/io';

export default class Contact extends PureComponent {
  render() {
    const ePostAddress = () => {
      const name = 'bob.beugels';
      const domain = 'gmail.com';
      return `${name}@${domain}`;
    };

    return (
      <React.Fragment>
        <div className="contact-details-link">
          <IoIosMail size="1.5em" />
          <span id="electronic-post-address-wrapper">{ePostAddress()}</span>
        </div>
        <div className="contact-details-link">
          <IoLogoLinkedin size="1.5em" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/bob-beugels-b44b8584/"
          >
            LinkedIn
          </a>
        </div>
        <div className="contact-details-link">
          <IoLogoGithub size="1.5em" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bobbeugels/BBBGLS"
          >
            Github
          </a>
        </div>
        <div className="contact-details-link">
          <IoIosMusicalNotes size="1.5em" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/nahtmael"
          >
            Soundcloud
          </a>
        </div>
      </React.Fragment>
    );
  }
}
