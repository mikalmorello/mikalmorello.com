import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Navigation from './Navigation'
import BostonCollegeBanner from './BostonCollegeBanner'
import BostonCollegeMain from './BostonCollegeMain'
import Footer from './Footer'


class BostonCollege extends React.Component {

  render(){
    return (
      <>
        <Helmet>
          <title>Boston College Redesign - Mikal Morello</title>
          <meta name="description" content="As an interface designed, I helped redesign and architect Boston College's website using Adobe Experience Manager." />
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
        <BostonCollegeBanner />
        <BostonCollegeMain />
        <Footer />
      </>
    )
  }
  
}

export default BostonCollege;