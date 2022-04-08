import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer">
      <div className="footer__topContainer">
        <div className="footer__top">
          <div className="footer__topLeft">
            <h5>Central Office</h5>
            <p>New York, New York</p>
          </div>
          <div className="footer__topRight">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>

      <div className="footer__bottomContainer">
        <div className="footer__bottom">
          <div className="footer__bottomLeft">
            <Link to="/" className="footer__logo">
              <p>Company<br />Name <br />
              <span>Copyright © 2021 Company Name</span> </p>
            </Link>
          </div>
          <div className="footer__bottomRight">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="ourImpact">Our Impact</Link>
            <Link to="#">Registration</Link>
            <Link to="#">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
