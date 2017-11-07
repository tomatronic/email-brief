import React, { Component } from 'react';

class blockList extends Component {
  render(){
    return(
      <li>
        <img src={this.props.details.image} alt="block" />
      </li>
    )
  }
}

export default blockList;
