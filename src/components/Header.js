import React from 'react';

import SvgMenu from './SvgMenu';
import { 
  Link
} from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      companyImage: ''
    }
    this.hasHash = this.hasHash.bind(this);
  }
  
  componentDidMount() {
    this.hasHash();
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    window.addEventListener('hashchange', this.hasHash, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('hashchange', this.hasHash, false);
  }
  
  
  hasHash(){
    switch(window.location.hash.substring(1).toLowerCase()) {
      case 'harvard': 
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'mit':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'edx':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'hbsp':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'wgbh':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'massart':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'ibm':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case '829':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      case 'hubspot':
        this.setCompany(window.location.hash.substring(1).toLowerCase());
        break;
      default:
        this.setCompany('');
        break;
    }
  }
  
  setCompany(companyName){
    this.setState({
      company: companyName,
      companyImage: `/assets/images/company/${companyName}.svg`
    })
  }
  
  createCompany(){
    if(!(this.state.company === '')){
      return (
          <div className="header__company">
            <span className="header__company-sign">+ </span>
            <img className="header__company-logo" src={this.state.companyImage} alt={this.state.company} />
          </div>
      )
    }
  }

  handleScroll(event) {
    var header = document.getElementById('header'),
      headerHeight = header.clientHeight,
      scrollAmount = window.scrollY,
      windowHeight = window.innerHeight,
      headerOffset = windowHeight; 

    if (scrollAmount >= headerHeight) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }

    if (scrollAmount > headerOffset) {
      header.classList.add('header--sticky');
    } else {
      header.classList.remove('header--sticky');
    }
  }
  
  checkMenuState(menuState){
    var header = document.getElementById('header');
    if (menuState === 'true') {
      document.body.classList.add('body--menu-open');
      document.body.classList.add('body--overflow-hidden');
      header.classList.add('header--menu-open');
      return 'header__menu-button--active';
    } else if (menuState === 'false' || menuState==='default') {
      document.body.classList.remove('body--menu-open');
      document.body.classList.remove('body--overflow-hidden');
      if(header && header.classList.contains('header--menu-open')){
        header.classList.remove('header--menu-open');
      }
    }
  }
  
  setHeaderColor(menuState, headerStyle){
    if(document.getElementById('header')){
      var header = document.getElementById('header');
      if (header && (menuState === 'true' || headerStyle === 'light')) {
        header.classList.add('header--menu-light');
        // return 'header--menu-light';
      } else if (header){
        header.classList.remove('header--menu-light');
      }
    }
  }

  render(){
    return (
      <header
        id="header" 
        className='header'
      >
        {this.setHeaderColor(this.props.menuState, this.props.headerStyle)}
        <div className="header__container">
          <div className="header__brand">
            <Link to="/" className="header__logo">
              <span className="svgstore svgstore--logo">
                <Logo />
              </span>
            </Link>

            {this.createCompany()}

          </div>
          <div className="header__actions">
            <button id="headerMenuButton" className={`header__menu-button ${this.checkMenuState(this.props.menuState)}`} onClick={(e)=>this.props.setMenuState()}>
              <SvgMenu />
            </button>
          </div>
        </div>
      </header>
    )
  }
} 

export default Header;