import React from 'react';
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TuftsMagazine from './components/TuftsMagazine'
import TuftsStandard from './components/TuftsStandard'
import BostonCollege from './components/BostonCollege'
import ScrollIntoView from './components/ScrollIntoView'
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuState:'default',
      bannerState: 'default',
      headerStyle: 'dark'
    }
    this.setMenuState = this.setMenuState.bind(this);
    this.setBannerState = this.setBannerState.bind(this);
    this.setHeaderStyle = this.setHeaderStyle.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  } 
  
  setMenuState(){
    if(this.state.menuState === 'default'){
      this.setState({
        menuState: 'true'
      })
    } else if (this.state.menuState === 'true') {
      this.setState({
        menuState: 'false'
      })
    } else if (this.state.menuState === 'false') {
      this.setState({
        menuState: 'true'
      })
    } 
  }
  
  closeMenu () {
    this.setState({
      menuState: 'default'
    })
  }
  
  setBannerState(activeBanner){
    this.setState({
      bannerState: activeBanner
    })
  }
  
  setHeaderStyle(activeStyle){
    this.setState({
      headerStyle: activeStyle
    })
  }
  
  
  render(){
      //console.log(this.props.location.search);
      //console.log(this.state.location.hash);
      //console.log(this.state.headerStyle);
    return (
      <Router> 
          <ScrollIntoView>
          <Route 
            exact path="/" 
            render={(props) => (
              <Home 
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                setBannerState={this.setBannerState} 
                bannerState={this.state.bannerState} 
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle={this.state.headerStyle} 
                closeMenu={this.closeMenu} 
              />
            )} 
          />
          <Route 
            path="/projects"
            render={(props) => (
              <Projects
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState}
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle='light'
                closeMenu={this.closeMenu.bind(this)} 
              />
            )} 
          />
          <Route 
            path="/contact"
            render={(props) => (
              <Contact
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState}
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle='dark'
                closeMenu={this.closeMenu}
              />
            )} 
          />
          <Route 
            path="/tufts-magazine"
            render={(props) => (
              <TuftsMagazine
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState}  
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle='dark'
                closeMenu={this.closeMenu}
              />
            )} 
          />
          <Route 
            path="/tufts-university-web-standard"
            render={(props) => (
              <TuftsStandard
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle='dark'
                closeMenu={this.closeMenu}
              />
            )} 
          />
          <Route 
            path="/boston-college-redesign"
            render={(props) => (
              <BostonCollege
                {...props} 
                setMenuState={this.setMenuState} 
                menuState={this.state.menuState} 
                setHeaderStyle={this.setHeaderStyle} 
                headerStyle='dark'
                closeMenu={this.closeMenu}
              />
            )} 
          />
        </ScrollIntoView>
      </Router>
    );
  }
}

export default App
  
  