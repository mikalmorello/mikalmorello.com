import React from 'react';

class HorizontalScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDown: false,
      isActive: '',
      x: 0, 
      y: 0,
      scrollLeft: '',
      startX: ''
    };
  }
  
  mouseDown(e){
    this.setState({
      isDown: true,
      isActive: 'horizontal-scroll__items--active',
      x: e.screenX,
      y: e.screenY,
      scrollLeft: this.refs.scroller.scrollLeft,
      startX: this.state.x - this.refs.scroller.offsetLeft
    })
  }
  
  mouseLeave(e){
    this.setState({
      isDown: false,
      isActive: ''
    })
  }
  
  mouseUp(e){
    this.setState({
      isDown: false,
      isActive: ''
    })
  }
  
  mouseMove(e){
    this.setState({
      x: e.screenX,
      y: e.screenY
    })
    if (this.state.isDown === false) {
      return;
    } else {
      e.preventDefault();
      var x = this.state.x - this.refs.scroller.offsetLeft;
      var walk = (x - this.state.startX) * 3;
      this.refs.scroller.scrollLeft = this.state.scrollLeft - walk;
    }
  }
  
  render(){
    return (
      <section className="section section--horizontal-scroll project__section">
        <div className="horizontal-scroll horizontal-scroll--left">
          <div
            ref='scroller'
            className={`horizontal-scroll__items ${this.state.isActive}`}
            onMouseDown={(e)=>this.mouseDown(e)} 
            onMouseLeave={(e)=>this.mouseLeave(e)} 
            onMouseUp={(e)=>this.mouseUp(e)} 
            onMouseMove={(e)=>this.mouseMove(e)}
          >
            {this.props.scrollItems}
          </div>
        </div>
      </section>
    )
  }
  
}

export default HorizontalScroll;