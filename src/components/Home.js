import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import HomeBanner from './HomeBanner'
import HomeMain from './HomeMain'
import Footer from './Footer'

class Home extends React.Component {
  
  render(){
    
      document.body.classList.add('body--home');
    
    return (
      <>
        <Helmet>
          <title>Mikal Morello, designer, developer, and digital strategist</title>
          <meta name="description" content="Hi, my name is Mikal Morello, I am a Designer, developer, and digital strategist. I am currently working as a front-end web developer for Tufts University" />
        </Helmet>  
        <Header 
          setMenuState={this.props.setMenuState}
          menuState={this.props.menuState}
          headerStyle={this.props.headerStyle}
        />
        <Navigation 
          menuState={this.props.menuState}
          closeMenu={this.props.closeMenu}
        />
        <HomeBanner 
          setBannerState={this.props.setBannerState}
          bannerState={this.props.bannerState}
          setHeaderStyle={this.props.setHeaderStyle} 
          headerStyle={this.props.headerStyle}
        />
        <HomeMain />
        <Footer />
      </>
    )
  }
  
}

export default Home;