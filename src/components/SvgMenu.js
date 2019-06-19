import React from 'react';

class SvgMenu extends React.Component {

  render(){
   
    return (
      <svg className='svg-menu' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
        <title>Menu</title>
        <g className='svg-menu-toggle'>
            <path className='line line-1' d='M0.1,5.7H100v10H0.1V5.7z' />
            <path className='line line-2' d='M0.1,45.6H100v10H0.1V45.6z' />
            <path className='line line-3' d='M0.1,84.5H100v10H0.1V84.5z' />
        </g>
      </svg>
    )
  }
}

export default SvgMenu;