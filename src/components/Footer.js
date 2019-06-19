import React from 'react';
import Fade from 'react-reveal/Fade';
import { 
  Link
} from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

class Footer extends React.Component {
  
  render(){
    return (
      <Fade>
        <footer id="footer" className="footer">
          <div className="footer__container">
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <span className="svgstore svgstore--logo">
                  <Logo />
                </span>
              </Link>
            </div>
            <div className="footer__actions">
              <ul className="footer__links">
                <li className="footer__link">
                  <a href="https://github.com/mikalmorello">Github</a>
                </li>
                <li className="footer__link">
                   <a href="https://codepen.io/mikalmorello/">Codepen</a>
                </li>
                <li className="footer__link">
                   <a href="https://www.linkedin.com/in/mikalmorello/">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </Fade>
    )
  }
  
}

export default Footer;