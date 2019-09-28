import React, { Component } from 'react'

class Ratings extends Component {
  render() {
    const { ratings } = this.props;
    const val = Number(ratings);

    const testedVal = val > 5 ? 5 : val;

    let det = [];
      for (let i=0; i<testedVal; i++){
        det.push('red');
      }
      for (let i=testedVal; i<=4; i++){
        det.push('black')
      }
    
    return (
      <div >
        {det.map((color, index) => (
          <svg
          key={index}
          fill={color}
          height="28"
          viewBox="0 0 18 18"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
          />
          <path d="M0 0h18v18H0z" fill="none" />
        </svg>
        ))}
      </div>
    )
  }
}

export default Ratings
