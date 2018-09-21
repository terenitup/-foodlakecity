import React, { Component } from 'react';
import dimsum from './dimSum.png'

export default class Home  extends Component {
//   constructor() {
//     super()
//   }

  render() {
    return (
      <div className='home'>
        <img className='dimsum' src={dimsum} alt="photo of dim sum spread"/>
        <div className="text">
          <div className="header">
            <h3 className="subhead">DISCOVER GOOD EATS IN</h3>
            <h3 className="subhead">SALT LAKE CITY AND BEYOND WITH</h3>
            <h1 className="FLC">FoodLakeCity</h1>
          </div>
        </div>
      </div>
      
    );
  }
}