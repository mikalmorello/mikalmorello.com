import React from 'react';

class InteractivePrototype extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  
  openMockup(e){
    this.setState({
      isActive: true,
    })
  }
  
  closeMockup(e){
    this.setState({
      isActive: false
    })
  }
  
  
  render(){
    return (
      <div className="mockup">
        <div id="mockupContainer" 
          className={`mockup__container ${this.state.isActive ? 'mockup__container--open' : ''}`}
        > 
          <div className="mockup__intro">
            <h2 className="mockup__title">
              {this.props.mockupTitle}
            </h2>
            <div className="mockup__description">
              {this.props.mockupDescription}
            </div>
            <div className="mockup__button-container">
              <button id="mockupButton" className="mockup__button" onClick={(e)=>this.openMockup()}>View Prototype</button>
            </div>
          </div>
          <div id="infoOverlay" className="mockup__image">
            <img src={this.props.mockupImage} alt="High fidelity prototype" /> 
            <div className="mockup__image-right"></div>
            <div className="mockup__image-left"></div>
          </div> 
          <button href="#0" id="mockupCloseButton" 
            className={`mockup__close-button mockup__hide-text ${this.state.isActive ? 'is-visible' : ''}`}
            onClick={(e)=>this.closeMockup()}>Close Prototype</button>
        </div>
      </div>
    )
  }
}

export default InteractivePrototype;