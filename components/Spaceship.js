import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render(){
    return(
      <div className='Spaceship'>
      <h1>Name: {this.props.name}</h1>
      <p>Speed: {this.props.speed}</p>
      <p>Has Rockets: {this.props.hasRockets}</p>
      <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}


Spaceship.defaultProps = {colors: ['black', 'red'], hasRockets: false}

module.exports = Spaceship;
