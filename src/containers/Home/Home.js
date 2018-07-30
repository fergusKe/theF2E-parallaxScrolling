import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="app">
        <div className="opening">
          <div className="star">
            <div className="star__top" />
            <div className="star__bottom" />
          </div>
          <div className="square" />
          <div className="circle" />
          <div className="text-block">
            <div className="text-block__title">GEOMETRY PERSON</div>
            <div className="text-block__desc">find your core personality type in shapes!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
