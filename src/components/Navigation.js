import React from 'react';
import { 
  Link,
  withRouter
} from 'react-router-dom';

class Navigation extends React.Component {
  
  componentWillMount() {
    this.props.history.listen(() => {
      this.props.closeMenu();
    });
  }
  
  checkMenuState(menuState){
    if (menuState === 'default') {
      return '';
    } else if(menuState === 'true'){ 
      return 'main-menu--is-visible';
    } else if (menuState === 'false') {
      return 'main-menu--is-hidden';
    }
  }
  
  render(){
    return (
      <nav id="mainMenu" className={`main-menu ${this.checkMenuState(this.props.menuState)}`}> 
        <ul className="main-menu__links">
          <li className="main-menu__link">
            <Link to="/" >Home</Link> 
          </li>
          <li className="main-menu__link">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="main-menu__link">
            <Link to="/contact" >Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
  
}

export default withRouter(Navigation);